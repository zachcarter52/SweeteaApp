"use strict";
exports.__esModule = true;
exports.searchEventsRequestSchema = void 0;
var schema_1 = require("../schema");
var searchEventsQuery_1 = require("./searchEventsQuery");
exports.searchEventsRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchEventsQuery_1.searchEventsQuerySchema; }))]
});
//# sourceMappingURL=searchEventsRequest.js.map