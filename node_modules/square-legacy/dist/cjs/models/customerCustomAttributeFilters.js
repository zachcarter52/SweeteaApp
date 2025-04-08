"use strict";
exports.__esModule = true;
exports.customerCustomAttributeFiltersSchema = void 0;
var schema_1 = require("../schema");
var customerCustomAttributeFilter_1 = require("./customerCustomAttributeFilter");
exports.customerCustomAttributeFiltersSchema = (0, schema_1.object)({
    filters: [
        'filters',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return customerCustomAttributeFilter_1.customerCustomAttributeFilterSchema; })))),
    ]
});
//# sourceMappingURL=customerCustomAttributeFilters.js.map