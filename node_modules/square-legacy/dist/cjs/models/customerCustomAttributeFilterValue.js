"use strict";
exports.__esModule = true;
exports.customerCustomAttributeFilterValueSchema = void 0;
var schema_1 = require("../schema");
var customerAddressFilter_1 = require("./customerAddressFilter");
var customerTextFilter_1 = require("./customerTextFilter");
var filterValue_1 = require("./filterValue");
var floatNumberRange_1 = require("./floatNumberRange");
var timeRange_1 = require("./timeRange");
exports.customerCustomAttributeFilterValueSchema = (0, schema_1.object)({
    email: ['email', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerTextFilter_1.customerTextFilterSchema; }))],
    phone: ['phone', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerTextFilter_1.customerTextFilterSchema; }))],
    text: ['text', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerTextFilter_1.customerTextFilterSchema; }))],
    selection: ['selection', (0, schema_1.optional)((0, schema_1.lazy)(function () { return filterValue_1.filterValueSchema; }))],
    date: ['date', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))],
    number: ['number', (0, schema_1.optional)((0, schema_1.lazy)(function () { return floatNumberRange_1.floatNumberRangeSchema; }))],
    mBoolean: ['boolean', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerAddressFilter_1.customerAddressFilterSchema; }))]
});
//# sourceMappingURL=customerCustomAttributeFilterValue.js.map