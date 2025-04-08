"use strict";
exports.__esModule = true;
exports.searchShiftsRequestSchema = void 0;
var schema_1 = require("../schema");
var shiftQuery_1 = require("./shiftQuery");
exports.searchShiftsRequestSchema = (0, schema_1.object)({
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return shiftQuery_1.shiftQuerySchema; }))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchShiftsRequest.js.map