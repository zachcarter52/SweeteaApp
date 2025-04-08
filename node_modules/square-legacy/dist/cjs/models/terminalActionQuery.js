"use strict";
exports.__esModule = true;
exports.terminalActionQuerySchema = void 0;
var schema_1 = require("../schema");
var terminalActionQueryFilter_1 = require("./terminalActionQueryFilter");
var terminalActionQuerySort_1 = require("./terminalActionQuerySort");
exports.terminalActionQuerySchema = (0, schema_1.object)({
    filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalActionQueryFilter_1.terminalActionQueryFilterSchema; }))],
    sort: ['sort', (0, schema_1.optional)((0, schema_1.lazy)(function () { return terminalActionQuerySort_1.terminalActionQuerySortSchema; }))]
});
//# sourceMappingURL=terminalActionQuery.js.map