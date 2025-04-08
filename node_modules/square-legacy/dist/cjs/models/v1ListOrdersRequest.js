"use strict";
exports.__esModule = true;
exports.v1ListOrdersRequestSchema = void 0;
var schema_1 = require("../schema");
exports.v1ListOrdersRequestSchema = (0, schema_1.object)({
    order: ['order', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    batchToken: ['batch_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=v1ListOrdersRequest.js.map