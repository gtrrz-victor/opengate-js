"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    "definitions": {
        "jobDefaultParameters": {
            "type": "object",
            "properties": {
                "job.request.operationParameters.ackTimeout": {
                    "type": "integer",
                    "title": "Operation ACK Timeout (milliseconds)",
                    "description": "",
                    "default": 5000
                },
                "job.request.operationParameters.timeout": {
                    "type": "integer",
                    "title": "Operation Timeout (milliseconds)",
                    "description": "",
                    "default": 60000
                },
                "job.request.operationParameters.retries": {
                    "type": "integer",
                    "title": "Operation Retries",
                    "description": "",
                    "default": 1
                },
                "job.request.operationParameters.retriesDelay": {
                    "type": "integer",
                    "title": "Operation Retries Delay (milliseconds)",
                    "description": "",
                    "default": 1000
                }
            }
        },
        "parametersEmpty": {
            "type": "object",
            "properties": {}
        },
        "stepsEmpty": {
            "type": "object",
            "properties": {}
        },
        "stepsResult": {
            "type": "string",
            "title": "Step Name",
            "description": "",
            "enum": ["ERROR", "SUCCESSFUL", "SKIPPED", "NOT_EXECUTED"],
            "javaEnumNames": ["ERROR", "SUCCESSFUL", "SKIPPED", "NOT_EXECUTED"]
        },
        "stepNoResponseData": {
            "type": "object",
            "properties": {
                "result": {
                    "$ref": "#/definitions/stepsResult"
                },
                "timestamp": {
                    "$ref": "#/definitions/timestamp"
                }
            },
            "required": ["name", "result", "timestamp"]
        },
        "date": {
            "type": "string",
            "format": "date",
            "public": true,
            "title": "date",
            "description": "date in ISO 8601",
            "pattern": "^([0-9]{4})-?(1[0-2]|0[1-9])-?(3[01]|0[1-9]|[12][0-9])$"
        },
        "time": {
            "type": "string",
            "format": "time",
            "public": true,
            "title": "time",
            "description": "time in ISO 8601",
            "pattern": "^(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])$"
        },
        "timezone": {
            "type": "string",
            "title": "timezone"
        },
        "dst": {
            "type": "integer",
            "title": "DST",
            "minimum": 0,
            "default": 0
        },
        "datetime": {
            "type": "object",
            "properties": {
                "date": {
                    "$ref": "#/definitions/date"
                },
                "time": {
                    "$ref": "#/definitions/time"
                },
                "timezone": {
                    "$ref": "#/definitions/timezone"
                },
                "dst": {
                    "$ref": "#/definitions/dst"
                }
            },
            "required": ["date", "time", "timezone", "dst"]
        },
        "timestamp": {
            "type": "string",
            "format": "date-time",
            "public": true,
            "title": "timestamp",
            "description": "date & time in ISO 8601",
            "pattern": "^([0-9]{4})-?(1[0-2]|0[1-9])-?(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):?([0-5][0-9]):?([0-5][0-9])(\\.([0-9]{3}))?[Z]?$"
        },
        "datamodelResultCode": {
            "type": "string",
            "title": "Result Code",
            "description": "Result code of Get Operation",
            "enum": ["SUCCESS", "PARAM_NOT_SUPPORTED", "INVALID_FORMAT", "WRONG_VALUE", "UNKNOWN"],
            "javaEnumNames": ["SUCCESS", "PARAM_NOT_SUPPORTED", "INVALID_FORMAT", "WRONG_VALUE", "UNKNOWN"]
        },
        "datamodelParamName": {
            "type": "string",
            "title": "Id",
            "description": "Id of the parameter"
        },
        "datamodelParamNameValue": {
            "type": "object",
            "properties": {
                "name": {
                    "$ref": "#/definitions/datamodelParamName"
                },
                "value": {
                    "type": "string",
                    "title": "Value",
                    "description": "Value of the parameter"
                }
            },
            "required": ["name", "value"]
        },
        "datamodelResponse": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "Id",
                    "description": "Id of the parameter"
                },
                "value": {
                    "type": "string",
                    "title": "type",
                    "description": "value of the parameter"
                },
                "resultCode": {
                    "$ref": "#/definitions/datamodelResultCode"
                },
                "resultDescription": {
                    "type": "string",
                    "title": "Result Description",
                    "description": "Result description of Get Operation"
                }
            },
            "required": ["name", "value"]
        },
        "coordinates": {
            "public": true,
            "description": "A geographical coordinates",
            "type": "array",
            "maxItems": 2,
            "items": {
                "type": "number"
            }
        },
        "location": {
            "public": true,
            "description": "A geojson enriched for OpenGate",
            "type": "object",
            "properties": {
                "position": {
                    "type": "object",
                    "description": "compatible with geojson format",
                    "properties": {
                        "type": {
                            "type": "string",
                            "default": "Point"
                        },
                        "coordinates": {
                            "type": "array",
                            "description": "Format [longitude, latitude]",
                            "minItems": 2,
                            "items": {
                                "type": "number"
                            },
                            "additionalItems": false
                        }
                    },
                    "required": ["coordinates"]
                },
                "country": {
                    "type": "string"
                },
                "region": {
                    "type": "string"
                },
                "province": {
                    "type": "string"
                },
                "town": {
                    "type": "string"
                },
                "postal": {
                    "type": "string"
                },
                "address": {
                    "type": "string"
                },
                "source": {
                    "type": "string",
                    "enum": ["MOBILE", "GPS", "GLONASS", "RTK", "RFID", "WIFI", "ZIGBEE", "LORA", "SIGFOX-BASIC", "SIGFOX-SPOTIT", "UNKNOWN"],
                    "javaEnumNames": ["MOBILE", "GPS", "GLONASS", "RTK", "RFID", "WIFI", "ZIGBEE", "LORA", "SIGFOX_BASIC", "SIGFOX_SPOTIT", "UNKNOWN"]
                },
                "accuracy": {
                    "type": "number",
                    "description": "position accuracy in meters"
                },
                "zoom": {
                    "type": "number",
                    "description": "zoom for the web map"
                }
            }
        },
        "ipv4": {
            "type": "string",
            "format": "ipv4",
            "public": true,
            "title": "ipv4",
            "description": "IPV4 format"
        },
        "ipv6": {
            "type": "string",
            "format": "ipv6",
            "public": true,
            "title": "ipv6",
            "description": "IPV6 format"
        },
        "mac48": {
            "type": "string",
            "public": true,
            "title": "mac48",
            "description": "MAC48 format",
            "pattern": "(([0-9A-Fa-f]{2}[-:]){5}[0-9A-Fa-f]{2})|(([0-9A-Fa-f]{4}){2}[0-9A-Fa-f]{4})"
        },
        "msisdn": {
            "public": true,
            "type": "string",
            "minLength": 7,
            "maxLength": 15
        },
        "address": {
            "type": "object",
            "public": true,
            "properties": {
                "type": {
                    "type": "string",
                    "enum": ["IPV4", "IPV6", "MAC48", "UNKNOWN", "SIGFOX", "HOSTNAME"],
                    "javaEnumNames": ["IPV4", "IPV6", "MAC48", "UNKNOWN", "SIGFOX", "HOSTNAME"]
                },
                "value": {
                    "type": "string",
                    "title": "type",
                    "description": "value of the parameter"
                },
                "apn": {
                    "type": "string"
                }
            }
        },
        "percentage": {
            "public": true,
            "type": "number",
            "minimum": 0,
            "maximum": 100
        },
        "entityType": {
            "type": "string",
            "title": "Entity Type",
            "description": "",
            "enum": ["GATEWAY", "ASSET", "COMMUNICATIONS_MODULE", "SUBSCRIPTION", "SUBSCRIBER"],
            "javaEnumNames": ["GATEWAY", "ASSET", "COMMUNICATIONS_MODULE", "SUBSCRIPTION", "SUBSCRIBER"]
        },
        "deviceOperationalStatus": {
            "type": "string",
            "title": "Operational Status",
            "description": "",
            "enum": ["NORMAL", "SAFE_MODE", "TAMPER", "TEST", "DOWN", "ALARM", "UNKNOWN"],
            "javaEnumNames": ["NORMAL", "SAFE_MODE", "TAMPER", "TEST", "DOWN", "ALARM", "UNKNOWN"]
        },
        "commsModuleOperationalStatus": {
            "type": "string",
            "title": "Operational Status",
            "description": "",
            "enum": ["STOPPED", "STOPPING", "STARTING", "RUNNING", "DISABLED", "ERROR"],
            "javaEnumNames": ["STOPPED", "STOPPING", "STARTING", "RUNNING", "DISABLED", "ERROR"]
        },
        "ipStatus": {
            "type": "string",
            "title": "IP Reachability Status",
            "description": "",
            "enum": ["OK", "NOK"],
            "javaEnumNames": ["OK", "NOK"]
        },
        "administrativeState": {
            "type": "string",
            "title": "Operational Status",
            "description": "",
            "enum": ["ACTIVE", "BANNED", "DELETED", "READY", "REPAIR", "REQUESTED", "RETIRED", "SUSPENDED", "TESTING"],
            "javaEnumNames": ["ACTIVE", "BANNED", "DELETED", "READY", "REPAIR", "REQUESTED", "RETIRED", "SUSPENDED", "TESTING"]
        },
        "assetAdministrativeState": {
            "type": "string",
            "title": "Operational Status",
            "description": "",
            "enum": ["BANNED", "DELETED", "IN_MAINTENANCE", "IN_STOCK", "IN_TRANSIT", "IN_USE", "MISSING", "ORDERED", "READY", "RETIRED"],
            "javaEnumNames": ["BANNED", "DELETED", "IN_MAINTENANCE", "IN_STOCK", "IN_TRANSIT", "IN_USE", "MISSING", "ORDERED", "READY", "RETIRED"]
        },
        "model": {
            "type": "object",
            "public": true,
            "title": "Model",
            "description": "",
            "properties": {
                "name": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                },
                "manufacturer": {
                    "type": "string"
                },
                "manufacturerOUI": {
                    "type": "string"
                }
            }
        },
        "software": {
            "type": "object",
            "public": true,
            "title": "Software",
            "description": "",
            "properties": {
                "name": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                },
                "type": {
                    "type": "string",
                    "enum": ["SOFTWARE", "FIRMWARE"],
                    "javaEnumNames": ["SOFTWARE", "FIRMWARE"]
                }
            }
        },
        "softwareList": {
            "type": "array",
            "public": true,
            "items": {
                "$ref": "#/definitions/software"
            }
        },
        "topologyPath": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "clock": {
            "type": "object",
            "title": "Clock",
            "public": true,
            "description": "",
            "properties": {
                "datetime": {
                    "$ref": "#/definitions/timestamp"
                },
                "timezone": {
                    "type": "number"
                },
                "dst": {
                    "type": "object",
                    "properties": {
                        "enabled": {
                            "type": "boolean"
                        },
                        "deviation": {
                            "type": "number"
                        },
                        "begin": {
                            "$ref": "#/definitions/timestamp"
                        },
                        "end": {
                            "$ref": "#/definitions/timestamp"
                        }
                    }
                }
            }
        },
        "outage": {
            "type": "object",
            "properties": {
                "started": {
                    "$ref": "#/definitions/timestamp"
                },
                "duration": {
                    "type": "number"
                }
            }
        },
        "unifiedPresence": {
            "type": "string",
            "enum": ["IP", "GPRS", "GSM", "NOT_REGISTERED", "UNKNOWN"],
            "javaEnumNames": ["IP", "GPRS", "GSM", "NOT_REGISTERED", "UNKNOWN"]
        },
        "cpuStatus": {
            "type": "string",
            "enum": ["IDLE", "IDLE/WORKING", "WORKING", "STRESSED", "OVERLOAD"],
            "javaEnumNames": ["IDLE", "IDLE_WORKING", "WORKING", "STRESSED", "OVERLOAD"]
        },
        "batteryStatus": {
            "type": "string",
            "enum": ["CHARGING", "CHARGED", "UNPLUGGED", "ERROR", "UNKNOWN"],
            "javaEnumNames": ["CHARGING", "CHARGED", "UNPLUGGED", "ERROR", "UNKNOWN"]
        },
        "signalQualityStatus": {
            "type": "string",
            "enum": ["LOW_CRITICAL", "LOW_WARNING", "NORMAL", "EXCELENT"],
            "javaEnumNames": ["LOW_CRITICAL", "LOW_WARNING", "NORMAL", "EXCELENT"]
        },
        "certificateList": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "presenceIp": {
            "type": "string",
            "enum": ["OK", "NOK"],
            "javaEnumNames": ["OK", "NOK"]
        },
        "presenceGprs": {
            "type": "string",
            "enum": ["START", "STOP", "INTERIM_UPDATE", "ON", "OFF", "NOK"],
            "javaEnumNames": ["START", "STOP", "INTERIM_UPDATE", "ON", "OFF", "NOK"]
        },
        "presenceGsm": {
            "type": "string",
            "enum": ["OK", "NOK", "UNCONFIG", "UNKNOWN"],
            "javaEnumNames": ["OK", "NOK", "UNCONFIG", "UNKNOWN"]
        },
        "temperatureStatus": {
            "type": "string",
            "enum": ["LOW_CRITICAL", "LOW_WARNING", "NORMAL", "HIGH_WARNING", "HIGH_CRITICAL"],
            "javaEnumNames": ["LOW_CRITICAL", "LOW_WARNING", "NORMAL", "HIGH_WARNING", "HIGH_CRITICAL"]
        },
        "powerSupplyStatus": {
            "type": "string",
            "enum": ["PLUGGED_CHARGING", "PLUGGED_CHARGED", "OUTAGE", "UNPLUGGED", "UNKNOWN"],
            "javaEnumNames": ["PLUGGED_CHARGING", "PLUGGED_CHARGED", "OUTAGE", "UNPLUGGED", "UNKNOWN"]
        },
        "powerSupplySource": {
            "type": "string",
            "enum": ["BATTERY", "DIESEL_GENERATOR", "NETWORK_PLUGGED", "SOLAR", "OTHER"],
            "javaEnumNames": ["BATTERY", "DIESEL_GENERATOR", "NETWORK_PLUGGED", "SOLAR", "OTHER"]
        },
        "antennaStatus": {
            "type": "string",
            "enum": ["NORMAL", "OPEN", "SHORT_CIRCUIT", "UNKNOWN"],
            "javaEnumNames": ["NORMAL", "OPEN", "SHORT_CIRCUIT", "UNKNOWN"]
        },
        "signalStrengthStatus": {
            "type": "string",
            "enum": ["LOW_CRITICAL", "LOW_WARNING", "NORMAL", "EXCELENT"],
            "javaEnumNames": ["LOW_CRITICAL", "LOW_WARNING", "NORMAL", "EXCELENT"]
        },
        "trafficSession": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "sentBytes": {
                    "type": "number"
                },
                "receivedBytes": {
                    "type": "number"
                },
                "sentPackets": {
                    "type": "number"
                },
                "receivedPackets": {
                    "type": "number"
                },
                "duration": {
                    "type": "number"
                },
                "address": {
                    "$ref": "#/definitions/address"
                },
                "status": {
                    "type": "string",
                    "enum": ["TERMINATED", "IN_PROGRESS", "UNKNOWN"],
                    "javaEnumNames": ["TERMINATED", "IN_PROGRESS", "UNKNOWN"]
                },
                "terminateCause": {
                    "type": "string"
                }
            }
        },
        "deviceSpecificType": {
            "type": "string",
            "enum": ["BLOODPRESSURE_SENSOR", "COMHUB", "CONCENTRATOR", "CONTAINER", "COORDINATOR", "GATEWAY", "GENERIC", "GLUCOMETER_SENSOR", "METER", "MODEM", "ROUTER", "SENSOR", "TPV", "VEHICLE", "VENDING", "WEIGHT_SENSOR"],
            "javaEnumNames": ["BLOODPRESSURE_SENSOR", "COMHUB", "CONCENTRATOR", "CONTAINER", "COORDINATOR", "GATEWAY", "GENERIC", "GLUCOMETER_SENSOR", "METER", "MODEM", "ROUTER", "SENSOR", "TPV", "VEHICLE", "VENDING", "WEIGHT_SENSOR"]
        },
        "commsModuleSpecificType": {
            "type": "string",
            "enum": ["ADSL", "CAN", "ETH", "GENERIC", "GSM", "HAN", "I2C", "LOWPAN", "MESH", "MOBILE", "PLC", "RS232", "RS422", "RS485", "SIGFOX", "UMTS", "WIFI", "ZIGBEE", "ZWAVE"],
            "javaEnumNames": ["ADSL", "CAN", "ETH", "GENERIC", "GSM", "HAN", "I2C", "LOWPAN", "MESH", "MOBILE", "PLC", "RS232", "RS422", "RS485", "SIGFOX", "UMTS", "WIFI", "ZIGBEE", "ZWAVE"]
        },
        "subscriberSpecificType": {
            "type": "string",
            "enum": ["ADSL", "CAN", "ETH", "GENERIC", "GSM", "HAN", "I2C", "LOWPAN", "MESH", "MOBILE", "PLC", "RS232", "RS422", "RS485", "SIM", "UMTS", "WIFI", "ZIGBEE", "ZWAVE"],
            "javaEnumNames": ["ADSL", "CAN", "ETH", "GENERIC", "GSM", "HAN", "I2C", "LOWPAN", "MESH", "MOBILE", "PLC", "RS232", "RS422", "RS485", "SIM", "UMTS", "WIFI", "ZIGBEE", "ZWAVE"]
        },
        "subscriptionSpecificType": {
            "type": "string",
            "enum": ["ADSL", "CAN", "ETH", "GENERIC", "GSM", "HAN", "I2C", "LOWPAN", "MESH", "MOBILE", "PLC", "RS232", "RS422", "RS485", "SIGFOX", "UMTS", "WIFI", "ZIGBEE", "ZWAVE"],
            "javaEnumNames": ["ADSL", "CAN", "ETH", "GENERIC", "GSM", "HAN", "I2C", "LOWPAN", "MESH", "MOBILE", "PLC", "RS232", "RS422", "RS485", "SIGFOX", "UMTS", "WIFI", "ZIGBEE", "ZWAVE"]
        },
        "assetSpecificType": {
            "type": "string",
            "enum": ["BOX", "BUILDING", "CONTROL_HOUSE", "CRANE", "FOUNTAIN", "ENGINE", "HOUSE", "MACHINE", "OTHER", "PALLET", "PIPELINE", "SPOOL", "TOWER", "VEHICLE", "WIRE", "WORKER"],
            "javaEnumNames": ["BOX", "BUILDING", "CONTROL_HOUSE", "CRANE", "FOUNTAIN", "ENGINE", "HOUSE", "MACHINE", "OTHER", "PALLET", "PIPELINE", "SPOOL", "TOWER", "VEHICLE", "WIRE", "WORKER"]
        },
        "ogIdentifier": {
            "type": "string",
            "public": true,
            "pattern": "^[a-zA-Z0-9_@.-]*$"
        },
        "ogImage": {
            "type": "string"
        },
        "area": {
            "type": "object",
            "properties": {
                "identifier": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }
            }
        },
        "areas": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/area"
            }
        },
        "form": {
            "type": "object",
            "public": true,
            "title": "Form",
            "properties": {
                "identifier": {
                    "type": "string",
                    "title": "identifier",
                    "description": "unique identifier for the form"
                },
                "data": {
                    "type": "object",
                    "title": "data",
                    "description": "data introduced in form"
                },
                "schema": {
                    "type": "object",
                    "title": "schema",
                    "description": "JSON schema with the design of the form"
                },
                "view": {
                    "type": "array",
                    "title": "view",
                    "description": "JSON array of form view definition"
                }
            },
            "required": ["identifier", "data", "schema", "view"]
        },
        "ticketSpecificType": {
            "type": "string",
            "title": "Specific Type",
            "enum": ["INSTALLATION", "TEST", "TECHNICAL_TASK", "DESINSTALLATION"],
            "javaEnumNames": ["INSTALLATION", "TEST", "TECHNICAL_TASK", "DESINSTALLATION"]
        },
        "ticketType": {
            "type": "string",
            "title": "Type",
            "enum": ["WORKORDER", "INCIDENT"],
            "javaEnumNames": ["WORKORDER", "INCIDENT"]
        },
        "ticketSeverity": {
            "type": "string",
            "title": "Severity",
            "enum": ["CRITICAL", "URGENT", "WARNING", "NORMAL"],
            "javaEnumNames": ["CRITICAL", "URGENT", "WARNING", "NORMAL"]
        },
        "ticketPriority": {
            "type": "string",
            "title": "Priority",
            "enum": ["MAJOR", "MINOR", "CRITICAL", "BLOCKER"],
            "javaEnumNames": ["MAJOR", "MINOR", "CRITICAL", "BLOCKER"]
        },
        "ticketStatus": {
            "type": "string",
            "title": "Status",
            "enum": ["CREATED", "ASSIGNED", "ANSWERED", "RESTORED", "RESOLVED", "CLOSED"],
            "javaEnumNames": ["CREATED", "ASSIGNED", "ANSWERED", "RESTORED", "RESOLVED", "CLOSED"]
        },
        "arrayString": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    }

};
module.exports = exports["default"];
//# sourceMappingURL=og_basic_types.js.map
