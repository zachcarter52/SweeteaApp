"use strict";
exports.__esModule = true;
exports.aCHDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.aCHDetailsSchema = (0, schema_1.object)({
    routingNumber: ['routing_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    accountNumberSuffix: ['account_number_suffix', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    accountType: ['account_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=aCHDetails.js.map