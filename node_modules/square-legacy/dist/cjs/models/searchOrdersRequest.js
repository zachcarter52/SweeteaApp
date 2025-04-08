"use strict";
exports.__esModule = true;
exports.searchOrdersRequestSchema = void 0;
var schema_1 = require("../schema");
var searchOrdersQuery_1 = require("./searchOrdersQuery");
exports.searchOrdersRequestSchema = (0, schema_1.object)({
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersQuery_1.searchOrdersQuerySchema; }))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    returnEntries: ['return_entries', (0, schema_1.optional)((0, schema_1.boolean)())]
});
//# sourceMappingURL=searchOrdersRequest.js.map