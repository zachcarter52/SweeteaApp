"use strict";
exports.__esModule = true;
exports.deviceCodeSchema = void 0;
var schema_1 = require("../schema");
exports.deviceCodeSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    code: ['code', (0, schema_1.optional)((0, schema_1.string)())],
    deviceId: ['device_id', (0, schema_1.optional)((0, schema_1.string)())],
    productType: ['product_type', (0, schema_1.string)()],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    pairBy: ['pair_by', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    statusChangedAt: ['status_changed_at', (0, schema_1.optional)((0, schema_1.string)())],
    pairedAt: ['paired_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=deviceCode.js.map