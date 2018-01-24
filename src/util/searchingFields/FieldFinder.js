import q from 'q';
import { GENERATED_FIELDS } from './source-precompiled/Fields';
import { IOT_FIELDS } from './IotFields';

var FIELDS = GENERATED_FIELDS;
for (var field in IOT_FIELDS) {
    if (FIELDS[field]) {
        for (var subfield in IOT_FIELDS[field]) {
            FIELDS[field][subfield] = IOT_FIELDS[field][subfield];
        }
    } else {
        FIELDS[field] = IOT_FIELDS[field];
    }
}

const match_url = {
    '/jobs': 'JOB',
    '/alarms': 'ENTITY_ALARM',
    '/operations': 'ENTITY_OPERATION',
    '/certificates': 'CERTIFICATE',
    '/bundles': 'UPDATE_BUNDLE_VERSION',
    '/datapoints': 'DATAPOINTS',
    '/datastreams': 'DATASTREAMS',
    '/datamodels': 'DATAMODELS',
    '/dmmQRating': 'DMMQRATING',
    '/iotQRating': 'IOTQRATING',
    '/catalog/softwares': 'SOFTWARE_VERSION',
    '/catalog/hardwares': 'MODEL',
    '/domains': 'DOMAIN',
    '/users': 'USER',
    '/areas': 'AREAS',
    '/devices': 'SearchOnDatamodel',
    '/subscriptions': 'SearchOnDatamodel',
    '/subscribers': 'SearchOnDatamodel',
    '/entities': 'SearchOnDatamodel'
};

const match_type = {
    'subscriber': 'DEVICE_PART_SUBSCRIBER',
    'subscription': 'DEVICE_PART_SUBSCRIPTION',
    'communicationsModule': 'DEVICE_PART_COMMSMODULE',
    'device': 'DEVICE_PART_DEVICE'
};

const match_type_inverse = {
    'DEVICE_PART_SUBSCRIBER': 'subscriber',
    'DEVICE_PART_SUBSCRIPTION': 'subscription',
    'DEVICE_PART_COMMSMODULE': 'communicationsModule',
    'DEVICE_PART_DEVICE': 'device'
};

const fields_related = ['relColl', 'relProv'];

const complexPrimaryType = ['DEVICE_PART_SUBSCRIBER', 'DEVICE_PART_SUBSCRIPTION', 'DEVICE_PART_COMMSMODULE', 'DEVICE_PART_DEVICE'];
const complexFields = ['subscriber', 'subscription', 'communicationsModule', 'device'];
const SIMPLE_FIELDS = 'simple';
const COMPLEX_FIELDS = 'complex';
const SEARCH_FIELDS = 'search';

const TYPE_FIELD = {
    get: function(url) {
        if (complexPrimaryType.indexOf(match_url[url]) >= 0) {
            return COMPLEX_FIELDS;
        }
        if (match_url[url] === 'SearchOnDatamodel') {
            return SEARCH_FIELDS;
        }
        return SIMPLE_FIELDS;
    }
};

const FIELD_SEARCHER = {
    [SEARCH_FIELDS]: function(states, context, primaryType, defered) {
        const filterByUrl = {
            '/devices': function(field) {
                return true;
            },
            '/subscriptions': function(field) {
                return true;
            },
            '/subscribers': function(field) {
                return true;
            },
            '/entities': function(field) {
                return true;
            }
        };

        this._ogapi.datamodelsSearchBuilder().build().execute().then(function(response) {
            var datastreams = [];
            if (response.statusCode === 200) {
                datastreams = response.data.datamodels.map(function(datamodel) {
                    var categories = datamodel.categories || [];
                    return categories.map(function(category) {
                        var datastreams = category.datastreams || [];
                        return datastreams.map(function(ds) {
                            return ds.identifier;
                        });
                    });
                });
                datastreams = reduce(datastreams);
            }
            defered.resolve(datastreams);
        }).catch(function(error) {
            defered.reject(error);
        });

        function reduce(array) {
            if (array.length > 0 && array[0].constructor === Array) {
                array = array.reduce(function(preVal, elem) {
                    return preVal.concat(elem);
                });
                return reduce(array);
            }
            return array;
        }

    },
    [SIMPLE_FIELDS]: function(states, context, primaryType, defered) {
        if (states.length > 1) return defered.resolve([]);
        defered.resolve(context[primaryType].slice());
    },
    [COMPLEX_FIELDS]: function(states, context, primaryType, defered) {
        const finiteStateMachine = {
            1: function(states, context) {
                // Fields del primaryType + los fields de los relacionados = complexFields
                return context[primaryType].concat(
                    complexFields.filter(
                        filterRelatedEntities,
                        match_type_inverse[primaryType]
                    )
                );
            },
            2: function(states, context) {
                try {
                    // Fields del relacionado + fields_related
                    return appendPreviousStates(
                        states,
                        fieldsNestedState(states[0], context).concat(fields_related)
                    );
                } catch (err) {
                    //console.warn(err);
                    return [];
                }
            },
            3: function(states, context) {
                let secondState = states[1];
                if (fields_related.indexOf(secondState) === -1) return [];
                try {
                    // Fields del relacionado 
                    return appendPreviousStates(
                        states,
                        fieldsNestedState(states[0], context)
                    );
                } catch (err) {
                    //console.warn(err);
                    return [];
                }
            }
        }

        let statesSize = states.length;
        let currentState = finiteStateMachine[statesSize];
        if (typeof currentState === "undefined") return defered.resolve([]);
        return defered.resolve(currentState(states, context));

        function fieldsNestedState(state, context) {
            let relatedPrimaryType, fieldsRelated;
            if (!(fieldsNestedState = match_type[state]) || !(fieldsRelated = context[fieldsNestedState]))
                throw new Error('Invalid primaryType: ' + state);
            return fieldsRelated.slice();
        }

        function filterRelatedEntities(relatedEntity) {
            return relatedEntity != this;
        }

        function appendPreviousStates(states, fields) {
            let out = []
            fields.forEach(function(field) {
                let arrayField = states.slice(0, -1);
                arrayField.push(field);
                out.push(arrayField.join("."));
            });
            return out;
        }
    }
}

export default class FieldFinder {
    constructor(ogapi, url) {
        this._ogapi = ogapi;
        this._url = url;
        this._type = TYPE_FIELD.get(url);
    }

    find(input = "") {
        let defered = q.defer();
        FIELD_SEARCHER[this._type].call(this, input.split('.'), FIELDS[match_url[this._url]], match_url[this._url], defered);
        return defered.promise;
    }
}