"use strict";
exports.__esModule = true;
exports.searchOrdersFilterSchema = void 0;
var schema_1 = require("../schema");
var searchOrdersCustomerFilter_1 = require("./searchOrdersCustomerFilter");
var searchOrdersDateTimeFilter_1 = require("./searchOrdersDateTimeFilter");
var searchOrdersFulfillmentFilter_1 = require("./searchOrdersFulfillmentFilter");
var searchOrdersSourceFilter_1 = require("./searchOrdersSourceFilter");
var searchOrdersStateFilter_1 = require("./searchOrdersStateFilter");
exports.searchOrdersFilterSchema = (0, schema_1.object)({
    stateFilter: [
        'state_filter',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersStateFilter_1.searchOrdersStateFilterSchema; })),
    ],
    dateTimeFilter: [
        'date_time_filter',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersDateTimeFilter_1.searchOrdersDateTimeFilterSchema; })),
    ],
    fulfillmentFilter: [
        'fulfillment_filter',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersFulfillmentFilter_1.searchOrdersFulfillmentFilterSchema; })),
    ],
    sourceFilter: [
        'source_filter',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersSourceFilter_1.searchOrdersSourceFilterSchema; })),
    ],
    customerFilter: [
        'customer_filter',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchOrdersCustomerFilter_1.searchOrdersCustomerFilterSchema; })),
    ]
});
//# sourceMappingURL=searchOrdersFilter.js.map