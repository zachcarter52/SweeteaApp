"use strict";
exports.__esModule = true;
exports.customerAddressFilterSchema = void 0;
var schema_1 = require("../schema");
var customerTextFilter_1 = require("./customerTextFilter");
exports.customerAddressFilterSchema = (0, schema_1.object)({
    postalCode: ['postal_code', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerTextFilter_1.customerTextFilterSchema; }))],
    country: ['country', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=customerAddressFilter.js.map