"use strict";
exports.__esModule = true;
exports.searchEventsFilterSchema = void 0;
var schema_1 = require("../schema");
var timeRange_1 = require("./timeRange");
exports.searchEventsFilterSchema = (0, schema_1.object)({
    eventTypes: ['event_types', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    merchantIds: ['merchant_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))]
});
//# sourceMappingURL=searchEventsFilter.js.map