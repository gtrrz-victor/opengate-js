'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _httpStatusCodes = require('http-status-codes');

var _httpStatusCodes2 = _interopRequireDefault(_httpStatusCodes);

/**
 *   This class allow make get request to user resource into Opengate North API.
 */

var GenericFinder = (function () {

    /**     
     * @param {InternalOpenGateAPI} ogapi - Reference to the API object.
     * @param {string} source - Relative url where is located the resource.
     * @param {string} reponseJsonData - Relative url where is located the resource. Can be null
     * @param {string} error_not_found - String error which will be thrown on not_found error.
     */

    function GenericFinder(ogapi, source, entity, error_not_found) {
        _classCallCheck(this, GenericFinder);

        this._api = ogapi.Napi;
        this._baseUrl = source;
        this._entity = entity;
        this._error_not_found = error_not_found;
        this._id = undefined;
    }

    /**
     * @return {String} This returns a string with the URL of the request.
     * @private
     */

    _createClass(GenericFinder, [{
        key: '_composeUrl',
        value: function _composeUrl() {
            return this._baseUrl + "/" + this._id;
        }
    }, {
        key: '_withId',
        value: function _withId(_id) {
            this._id = _id;
            return this;
        }
    }, {
        key: '_getExtraHeaders',
        value: function _getExtraHeaders() {
            return this._headers;
        }
    }, {
        key: '_setExtraHeaders',
        value: function _setExtraHeaders(headers) {
            if (this._headers) {
                var keys = Object.keys(headers);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    this._headers[key] = headers[key];
                }
            } else {
                this._headers = headers;
            }
        }

        /**
         * @return {Promise}
         * @private
         */
    }, {
        key: '_execute',
        value: function _execute() {
            var defered = _q2['default'].defer();
            var promise = defered.promise;
            var _entity = this._entity;
            var _error_not_found = this._error_not_found;
            //console.log("URL: " + this._composeUrl());
            this._api.get(this._composeUrl(), undefined, this._getExtraHeaders()).then(function (req) {
                //console.log("STATUS_CODE: " + JSON.stringify(req));
                if (req.statusCode === 204) {
                    defered.reject({ error: _error_not_found, statusCode: _httpStatusCodes2['default'].NOT_FOUND });
                } else {
                    if (req.body.syncCache) {
                        defered.resolve({ data: req.body[_entity], statusCode: req.statusCode, syncCache: req.body.syncCache });
                    } else {
                        var data = req.body[_entity];
                        defered.resolve({ data: data ? data : req.body, statusCode: req.statusCode });
                    }
                }
            })['catch'](function (error) {
                // BUG RELACIONADO (http://cm.amplia.es/jira/browse/OGODM-3250)
                //console.log("ERROR: " + error.statusCode);
                if (error.statusCode === 400) {
                    error.statusCode = _httpStatusCodes2['default'].NOT_FOUND;
                }

                defered.reject(error);
            });
            return promise;
        }
    }]);

    return GenericFinder;
})();

exports['default'] = GenericFinder;
module.exports = exports['default'];
//# sourceMappingURL=GenericFinder.js.map
