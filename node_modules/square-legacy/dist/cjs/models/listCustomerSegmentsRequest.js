"use strict";
exports.__esModule = true;
exports.listCustomerSegmentsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listCustomerSegmentsRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=listCustomerSegmentsRequest.js.map