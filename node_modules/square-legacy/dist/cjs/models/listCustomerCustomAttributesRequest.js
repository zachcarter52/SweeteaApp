"use strict";
exports.__esModule = true;
exports.listCustomerCustomAttributesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listCustomerCustomAttributesRequestSchema = (0, schema_1.object)({
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    withDefinitions: ['with_definitions', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=listCustomerCustomAttributesRequest.js.map