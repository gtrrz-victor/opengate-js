// Fields generated at: Thu Feb 09 2017 11:06:37 GMT+0100 (CET)
// DB: 172.19.18.242:1521/QA
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var IOT_FIELDS = {
    "DATAPOINTS": {
        "DATAPOINTS": ["datapoint.feed", "datapoint.device", "datapoint.datastream", "datapoint.from", "datapoint.at", "datapoint.value", "datapoint.tag", "datapoint.qratingScoringQValue", "datapoint.qratingScoringQScore", "datapoint.qratingScoringQuality", "datapoint.qratingScoringPerformance", "datapoint.qratingMinRequiredValue", "datapoint.qratingMinRequiredLabel", "datapoint.qratingMinDesiredValue", "datapoint.qratingMinDesiredLabel", "datapoint.qratingIdealValue", "datapoint.qratingIdealLabel", "datapoint.qratingMaxDesiredValue", "datapoint.qratingMaxDesiredLabel", "datapoint.qratingMaxAllowedValue", "datapoint.qratingMaxAllowedLabel", "datapoint.qratingMaxScore"]
    },
    "DATAMODELS": {
        "DATAMODELS": ["organizationName", "datamodel.identifier", "datamodel.name", "datamodel.description", "datamodel.version", "category.name", "datastreams.id", "datastreams.name", "datastreams.description", "datastreams.unit.type", "datastreams.unit.label", "datastreams.unit.symbol", "datastreams.period", "datastreams.tags", "datastreams.qratingMinRequiredValue", "datastreams.qratingMinRequiredLabel", "datastreams.qratingMinDesiredValue", "datastreams.qratingMinDesiredLabel", "datastreams.qratingIdealValue", "datastreams.qratingIdealLabel", "datastreams.qratingMaxDesiredValue", "datastreams.qratingMaxDesiredLabel", "datastreams.qratingMaxAllowedValue", "datastreams.qratingMaxAllowedLabel", "datastreams.qratingMaxScore"]
    },
    "IOTDEVICES": {
        "IOTDEVICES": ["datastream.id", "datastream.name", "datastream.feed", "datastream.device", "datastream.description", "datastream.unit.type", "datastream.unit.label", "datastream.unit.symbol", "datastream.period", "datastream.tags", "datastream.updated", "datastream.minValue", "datastream.maxValue", "datastream.currentValue", "datastream.categoryName", "datastream.profileId", "datastream.profileName", "datastream.profileDescription", "datastream.profileVersion", "datastream.qratingScoringQValue", "datastream.qratingScoringQScore", "datastream.qratingScoringQuality", "datastream.qratingScoringPerformance", "datastream.qratingMinRequiredValue", "datastream.qratingMinRequiredLabel", "datastream.qratingMinDesiredValue", "datastream.qratingMinDesiredLabel", "datastream.qratingIdealValue", "datastream.qratingIdealLabel", "datastream.qratingMaxDesiredValue", "datastream.qratingMaxDesiredLabel", "datastream.qratingMaxAllowedValue", "datastream.qratingMaxAllowedLabel", "datastream.qratingMaxScore", "deviceId", "feedId", "deviceOrganization", "profile.Name", "profile.Description", "profile.Version", "profile.Score", "profile.MaxScore", "profile.Performance", "profile.AvgPerformance", "profile.Quality", "category.Name", "category.Score", "category.MaxScore", "category.Performance", "category.AvgPerformance", "category.Quality", "device.Score", "device.MaxScore", "device.Performance", "device.AvgPerformance", "device.Quality", "device.Channel", "device.EntityType"]
    },
    "DATASTREAMS": {
        "DATASTREAMS": ["datastream.id", "datastream.name", "datastream.feed", "datastream.device", "datastream.description", "datastream.unit.type", "datastream.unit.label", "datastream.unit.symbol", "datastream.period", "datastream.tags", "datastream.updated", "datastream.minValue", "datastream.maxValue", "datastream.currentValue", "datastream.categoryName", "datastream.profileId", "datastream.profileName", "datastream.profileDescription", "datastream.profileVersion", "datastream.qratingScoringQValue", "datastream.qratingScoringQScore", "datastream.qratingScoringQuality", "datastream.qratingScoringPerformance", "datastream.qratingMinRequiredValue", "datastream.qratingMinRequiredLabel", "datastream.qratingMinDesiredValue", "datastream.qratingMinDesiredLabel", "datastream.qratingIdealValue", "datastream.qratingIdealLabel", "datastream.qratingMaxDesiredValue", "datastream.qratingMaxDesiredLabel", "datastream.qratingMaxAllowedValue", "datastream.qratingMaxAllowedLabel", "datastream.qratingMaxScore"]
    },
    "DMMQRATING": {
        "DMMQRATING": ["datastream.id", "datastream.name", "datastream.feed", "datastream.device", "datastream.description", "datastream.unit.type", "datastream.unit.label", "datastream.unit.symbol", "datastream.period", "datastream.tags", "datastream.updated", "datastream.minValue", "datastream.maxValue", "datastream.currentValue", "datastream.categoryName", "datastream.profileId", "datastream.profileName", "datastream.profileDescription", "datastream.profileVersion", "datastream.qratingScoringQValue", "datastream.qratingScoringQScore", "datastream.qratingScoringQuality", "datastream.qratingScoringPerformance", "datastream.qratingMinRequiredValue", "datastream.qratingMinRequiredLabel", "datastream.qratingMinDesiredValue", "datastream.qratingMinDesiredLabel", "datastream.qratingIdealValue", "datastream.qratingIdealLabel", "datastream.qratingMaxDesiredValue", "datastream.qratingMaxDesiredLabel", "datastream.qratingMaxAllowedValue", "datastream.qratingMaxAllowedLabel", "datastream.qratingMaxScore"]
    },
    "IOTQRATING": {
        "IOTQRATING": ["datastream.id", "datastream.name", "datastream.feed", "datastream.device", "datastream.description", "datastream.unit.type", "datastream.unit.label", "datastream.unit.symbol", "datastream.period", "datastream.tags", "datastream.updated", "datastream.minValue", "datastream.maxValue", "datastream.currentValue", "datastream.categoryName", "datastream.profileId", "datastream.profileName", "datastream.profileDescription", "datastream.profileVersion", "datastream.qratingScoringQValue", "datastream.qratingScoringQScore", "datastream.qratingScoringQuality", "datastream.qratingScoringPerformance", "datastream.qratingMinRequiredValue", "datastream.qratingMinRequiredLabel", "datastream.qratingMinDesiredValue", "datastream.qratingMinDesiredLabel", "datastream.qratingIdealValue", "datastream.qratingIdealLabel", "datastream.qratingMaxDesiredValue", "datastream.qratingMaxDesiredLabel", "datastream.qratingMaxAllowedValue", "datastream.qratingMaxAllowedLabel", "datastream.qratingMaxScore"]
    },
    "DEVICE_PART_DEVICE": {
        "IOT": ["datastream.id", "datastream.name", "datastream.feed", "datastream.device", "datastream.description", "datastream.unit.type", "datastream.unit.label", "datastream.unit.symbol", "datastream.period", "datastream.tags", "datastream.updated", "datastream.minValue", "datastream.maxValue", "datastream.currentValue", "datastream.categoryName", "datastream.profileId", "datastream.profileName", "datastream.profileDescription", "datastream.profileVersion", "datastream.qratingScoringQValue", "datastream.qratingScoringQScore", "datastream.qratingScoringQuality", "datastream.qratingScoringPerformance", "datastream.qratingMinRequiredValue", "datastream.qratingMinRequiredLabel", "datastream.qratingMinDesiredValue", "datastream.qratingMinDesiredLabel", "datastream.qratingIdealValue", "datastream.qratingIdealLabel", "datastream.qratingMaxDesiredValue", "datastream.qratingMaxDesiredLabel", "datastream.qratingMaxAllowedValue", "datastream.qratingMaxAllowedLabel", "datastream.qratingMaxScore", "deviceId", "feedId", "deviceOrganization", "profile.Name", "profile.Description", "profile.Version", "profile.Score", "profile.MaxScore", "profile.Performance", "profile.AvgPerformance", "profile.Quality", "category.Name", "category.Score", "category.MaxScore", "category.Performance", "category.AvgPerformance", "category.Quality", "device.Score", "device.MaxScore", "device.Performance", "device.AvgPerformance", "device.Quality", "device.Channel", "device.EntityType"]
    },
    "USER": {
        "USER": ["user.email", "user.description", "workgroup.name", "domain.name", "profile.name", "user.name", "user.surname", "country.code", "language.code"]
    },
    "DOMAIN": {
        "DOMAIN": []
    }
};
exports.IOT_FIELDS = IOT_FIELDS;
//# sourceMappingURL=IotFields.js.map
