"use strict";
exports.__esModule = true;
exports.searchOrdersQuerySchema = void 0;
var schema_1 = require("../schema");
var searchOrdersFilter_1 = require("./searchOrdersFilter");
var searchOrdersSort_1 = require("./searchOrdersSort");
exports.searchOrdersQuerySchema = (0, schema_1.object)({
    filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersFilter_1.searchOrdersFilterSchema; }))],
    sort: ['sort', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersSort_1.searchOrdersSortSchema; }))]
});
//# sourceMappingURL=searchOrdersQuery.js.map