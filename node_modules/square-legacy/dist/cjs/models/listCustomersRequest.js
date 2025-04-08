"use strict";
exports.__esModule = true;
exports.listCustomersRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listCustomersRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    sortField: ['sort_field', (0, schema_1.optional)((0, schema_1.string)())],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())],
    count: ['count', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=listCustomersRequest.js.map