"use strict";
exports.__esModule = true;
exports.listDeviceCodesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listDeviceCodesRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    productType: ['product_type', (0, schema_1.optional)((0, schema_1.string)())],
    status: ['status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=listDeviceCodesRequest.js.map