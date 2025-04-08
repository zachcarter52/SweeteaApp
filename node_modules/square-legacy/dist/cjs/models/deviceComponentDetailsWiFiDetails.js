"use strict";
exports.__esModule = true;
exports.deviceComponentDetailsWiFiDetailsSchema = void 0;
var schema_1 = require("../schema");
var deviceComponentDetailsMeasurement_1 = require("./deviceComponentDetailsMeasurement");
exports.deviceComponentDetailsWiFiDetailsSchema = (0, schema_1.object)({
    active: ['active', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    ssid: ['ssid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    ipAddressV4: ['ip_address_v4', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    secureConnection: ['secure_connection', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    signalStrength: [
        'signal_strength',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceComponentDetailsMeasurement_1.deviceComponentDetailsMeasurementSchema; })),
    ]
});
//# sourceMappingURL=deviceComponentDetailsWiFiDetails.js.map