"use strict";
exports.__esModule = true;
exports.deviceMetadataSchema = void 0;
var schema_1 = require("../schema");
exports.deviceMetadataSchema = (0, schema_1.object)({
    batteryPercentage: ['battery_percentage', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    chargingState: ['charging_state', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    merchantId: ['merchant_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    networkConnectionType: [
        'network_connection_type',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    paymentRegion: ['payment_region', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    serialNumber: ['serial_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    osVersion: ['os_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    appVersion: ['app_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    wifiNetworkName: ['wifi_network_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    wifiNetworkStrength: ['wifi_network_strength', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    ipAddress: ['ip_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=deviceMetadata.js.map