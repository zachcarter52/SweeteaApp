"use strict";
exports.__esModule = true;
exports.searchOrdersDateTimeFilterSchema = void 0;
var schema_1 = require("../schema");
var timeRange_1 = require("./timeRange");
exports.searchOrdersDateTimeFilterSchema = (0, schema_1.object)({
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))],
    closedAt: ['closed_at', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))]
});
//# sourceMappingURL=searchOrdersDateTimeFilter.js.map