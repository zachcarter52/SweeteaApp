"use strict";
exports.__esModule = true;
exports.searchEventsQuerySchema = void 0;
var schema_1 = require("../schema");
var searchEventsFilter_1 = require("./searchEventsFilter");
var searchEventsSort_1 = require("./searchEventsSort");
exports.searchEventsQuerySchema = (0, schema_1.object)({
    filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchEventsFilter_1.searchEventsFilterSchema; }))],
    sort: ['sort', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchEventsSort_1.searchEventsSortSchema; }))]
});
//# sourceMappingURL=searchEventsQuery.js.map