"use strict";
exports.__esModule = true;
exports.listCustomerGroupsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listCustomerGroupsRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=listCustomerGroupsRequest.js.map