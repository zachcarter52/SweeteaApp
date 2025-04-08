"use strict";
exports.__esModule = true;
exports.merchantSchema = void 0;
var schema_1 = require("../schema");
exports.merchantSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    businessName: ['business_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    country: ['country', (0, schema_1.string)()],
    languageCode: ['language_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    currency: ['currency', (0, schema_1.optional)((0, schema_1.string)())],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    mainLocationId: ['main_location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=merchant.js.map