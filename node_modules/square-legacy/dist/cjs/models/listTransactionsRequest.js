"use strict";
exports.__esModule = true;
exports.listTransactionsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listTransactionsRequestSchema = (0, schema_1.object)({
    beginTime: ['begin_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endTime: ['end_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listTransactionsRequest.js.map