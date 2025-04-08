"use strict";
exports.__esModule = true;
exports.terminalRefundQuerySchema = void 0;
var schema_1 = require("../schema");
var terminalRefundQueryFilter_1 = require("./terminalRefundQueryFilter");
var terminalRefundQuerySort_1 = require("./terminalRefundQuerySort");
exports.terminalRefundQuerySchema = (0, schema_1.object)({
    filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalRefundQueryFilter_1.terminalRefundQueryFilterSchema; }))],
    sort: ['sort', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalRefundQuerySort_1.terminalRefundQuerySortSchema; }))]
});
//# sourceMappingURL=terminalRefundQuery.js.map