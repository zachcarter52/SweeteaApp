"use strict";
exports.__esModule = true;
exports.deviceAttributesSchema = void 0;
var schema_1 = require("../schema");
exports.deviceAttributesSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    manufacturer: ['manufacturer', (0, schema_1.string)()],
    model: ['model', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    manufacturersId: ['manufacturers_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.string)())],
    merchantToken: ['merchant_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=deviceAttributes.js.map