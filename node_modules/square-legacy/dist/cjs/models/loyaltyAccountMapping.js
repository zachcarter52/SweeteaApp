"use strict";
exports.__esModule = true;
exports.loyaltyAccountMappingSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyAccountMappingSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=loyaltyAccountMapping.js.map