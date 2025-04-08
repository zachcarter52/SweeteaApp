"use strict";
exports.__esModule = true;
exports.shiftQuerySchema = void 0;
var schema_1 = require("../schema");
var shiftFilter_1 = require("./shiftFilter");
var shiftSort_1 = require("./shiftSort");
exports.shiftQuerySchema = (0, schema_1.object)({
    filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return shiftFilter_1.shiftFilterSchema; }))],
    sort: ['sort', (0, schema_1.optional)((0, schema_1.lazy)(function () { return shiftSort_1.shiftSortSchema; }))]
});
//# sourceMappingURL=shiftQuery.js.map