// Fields generated at: Thu Feb 09 2017 11:06:37 GMT+0100 (CET)
// DB: 172.19.18.242:1521/QA
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var IOT_FIELDS = {
    "DATAPOINTS": {
        "DATAPOINTS": ["datapoints.organizationId", "datapoints.organization", "datapoints.channelId", "datapoints.channel", "datapoints.datastreamId", "datapoints.entityIdentifier", "datapoints.subEntityIdentifier", "datapoints._current.feedId", "datapoints._current.date", "datapoints._current.value", "datapoints._current.tags", "datapoints._current.scoring.performance", "datapoints._current.scoring.qrating.min_required.value", "datapoints._current.scoring.qrating.min_required.label", "datapoints._current.scoring.qrating.min_desired.value", "datapoints._current.scoring.qrating.min_desired.label", "datapoints._current.scoring.qrating.ideal.value", "datapoints._current.scoring.qrating.ideal.label", "datapoints._current.scoring.qrating.max_desired.value", "datapoints._current.scoring.qrating.max_desired.label", "datapoints._current.scoring.qrating.max_allowed.value", "datapoints._current.scoring.qrating.max_allowed.label", "datapoints._current.scoring.qrating.max_score", "datapoints._current.scoring.qrating.cumulative_period_divisor", "datapoints._current.scoring.qrating.conversion_matrix", "datapoints._current.scoring.qrating.version"]
    },
    "DATAMODELS": {
        "DATAMODELS": ["datamodels.organizationName", "datamodels.identifier", "datamodels.name", "datamodels.description", "datamodels.version", "datamodels.categories.name", "datamodels.categories.identifier", "datamodels.categories.datastreams.identifier", "datamodels.categories.datastreams.name", "datamodels.categories.datastreams.description", "datamodels.categories.datastreams.hardwareIds", "datamodels.categories.datastreams.unit", "datamodels.categories.datastreams.unit.type", "datamodels.categories.datastreams.unit.label", "datamodels.categories.datastreams.unit.symbol", "datamodels.categories.datastreams.period", "datamodels.categories.datastreams.access", "datamodels.categories.datastreams.schema", "datamodels.categories.datastreams.storage", "datamodels.categories.datastreams.storage.period", "datamodels.categories.datastreams.storage.total", "datamodels.categories.datastreams.tags", "datamodels.categories.datastreams.views", "datamodels.categories.datastreams.icon", "datamodels.categories.datastreams.modifiable", "datamodels.categories.datastreams.required", "datamodels.categories.datastreams.qrating.min_required.value", "datamodels.categories.datastreams.qrating.min_required.label", "datamodels.categories.datastreams.qrating.min_desired.value", "datamodels.categories.datastreams.qrating.min_desired.label", "datamodels.categories.datastreams.qrating.ideal.value", "datamodels.categories.datastreams.qrating.ideal.label", "datamodels.categories.datastreams.qrating.max_desired.value", "datamodels.categories.datastreams.qrating.max_desired.label", "datamodels.categories.datastreams.qrating.max_allowed.value", "datamodels.categories.datastreams.qrating.max_allowed.label", "datamodels.categories.datastreams.qrating.max_score", "datamodels.categories.datastreams.qrating.cumulative_period_divisor", "datamodels.categories.datastreams.qrating.conversion_matrix", "datamodels.categories.datastreams.qrating.version"]
    },
    "DATASTREAMS": {
        "DATASTREAMS": ["datastreams.datastreamId", "datastreams.name", "datastreams.description", "datastreams.unit.type", "datastreams.unit.label", "datastreams.unit.symbol", "datastreams.period", "datastreams._current.tags", "datastreams._current.date", "datastreams._current.value", "datastreams.categoryId", "datastreams.datamodelId", "datastreams.access", "datastreams.channel", "datastreams.organization", "datastreams.entityIdentifier", "feeds.entityIdentifier", "datastreams._id.subEntityIdentifier", "datastreams._current.scoring.qrating.min_required.value", "datastreams._current.scoring.qrating.min_required.label", "datastreams._current.scoring.qrating.min_desired.value", "datastreams._current.scoring.qrating.min_desired.label", "datastreams._current.scoring.qrating.ideal.value", "datastreams._current.scoring.qrating.ideal.label", "datastreams._current.scoring.qrating.max_desired.value", "datastreams._current.scoring.qrating.max_desired.label", "datastreams._current.scoring.qrating.max_allowed.value", "datastreams._current.scoring.qrating.max_allowed.label", "datastreams._current.scoring.qrating.max_score", "datastreams._current.scoring.qrating.cumulative_period_divisor", "datastreams._current.scoring.qrating.max_score", "datastreams._current.scoring.qrating.conversion_matrix", "datastreams.version", "feeds.identifier", "datastreams._current.scoring.qrating.version", "datastreams._current.scoring.scoringPerformance"]
    },
    "DEVICE_PART_DEVICE": {
        "IOT": ["datastream.id", "datastream.name", "datastream.feed", "datastream.device", "datastream.description", "datastream.unit.type", "datastream.unit.label", "datastream.unit.symbol", "datastream.period", "datastream.tags", "datastream.updated", "datastream.minValue", "datastream.maxValue", "datastream.currentValue", "datastream.categoryName", "datastream.profileId", "datastream.profileName", "datastream.profileDescription", "datastream.profileVersion", "datastream.qratingScoringQValue", "datastream.qratingScoringQScore", "datastream.qratingScoringQuality", "datastream.qratingScoringPerformance", "datastream.qratingMinRequiredValue", "datastream.qratingMinRequiredLabel", "datastream.qratingMinDesiredValue", "datastream.qratingMinDesiredLabel", "datastream.qratingIdealValue", "datastream.qratingIdealLabel", "datastream.qratingMaxDesiredValue", "datastream.qratingMaxDesiredLabel", "datastream.qratingMaxAllowedValue", "datastream.qratingMaxAllowedLabel", "datastream.qratingMaxScore", "deviceId", "feedId", "deviceOrganization", "profile.Name", "profile.Description", "profile.Version", "profile.Score", "profile.MaxScore", "profile.Performance", "profile.AvgPerformance", "profile.Quality", "category.Name", "category.Score", "category.MaxScore", "category.Performance", "category.AvgPerformance", "category.Quality", "device.Score", "device.MaxScore", "device.Performance", "device.AvgPerformance", "device.Quality", "device.Channel", "device.EntityType"]
    },
    "USER": {
        "USER": ["user.email", "user.description", "workgroup.name", "domain.name", "profile.name", "user.name", "user.surname", "country.code", "language.code"]
    },
    "DOMAIN": {
        "DOMAIN": ["domain.name", "domain.description"]
    },
    "AREAS": {
        "AREAS": ["areas.identifier", "areas.name", "areas.description", "areas.entities", "areas.geometry", "areas.organization"]
    },
    "GENERAL": {
        "GENERAL": []
    },
    "EMPTY": {
        "EMPTY": []
    }
};
exports.IOT_FIELDS = IOT_FIELDS;
//# sourceMappingURL=IotFields.js.map
