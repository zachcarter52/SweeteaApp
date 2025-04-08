"use strict";
exports.__esModule = true;
exports.customerCustomAttributeFilterSchema = void 0;
var schema_1 = require("../schema");
var customerCustomAttributeFilterValue_1 = require("./customerCustomAttributeFilterValue");
var timeRange_1 = require("./timeRange");
exports.customerCustomAttributeFilterSchema = (0, schema_1.object)({
    key: ['key', (0, schema_1.string)()],
    filter: [
        'filter',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerCustomAttributeFilterValue_1.customerCustomAttributeFilterValueSchema; })),
    ],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))]
});
//# sourceMappingURL=customerCustomAttributeFilter.js.map