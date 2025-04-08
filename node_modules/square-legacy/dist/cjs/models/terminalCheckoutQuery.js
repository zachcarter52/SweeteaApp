"use strict";
exports.__esModule = true;
exports.terminalCheckoutQuerySchema = void 0;
var schema_1 = require("../schema");
var terminalCheckoutQueryFilter_1 = require("./terminalCheckoutQueryFilter");
var terminalCheckoutQuerySort_1 = require("./terminalCheckoutQuerySort");
exports.terminalCheckoutQuerySchema = (0, schema_1.object)({
    filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalCheckoutQueryFilter_1.terminalCheckoutQueryFilterSchema; }))],
    sort: ['sort', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalCheckoutQuerySort_1.terminalCheckoutQuerySortSchema; }))]
});
//# sourceMappingURL=terminalCheckoutQuery.js.map