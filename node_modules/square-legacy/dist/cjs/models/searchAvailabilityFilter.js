"use strict";
exports.__esModule = true;
exports.searchAvailabilityFilterSchema = void 0;
var schema_1 = require("../schema");
var segmentFilter_1 = require("./segmentFilter");
var timeRange_1 = require("./timeRange");
exports.searchAvailabilityFilterSchema = (0, schema_1.object)({
    startAtRange: ['start_at_range', (0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; })],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    segmentFilters: [
        'segment_filters',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return segmentFilter_1.segmentFilterSchema; })))),
    ],
    bookingId: ['booking_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=searchAvailabilityFilter.js.map