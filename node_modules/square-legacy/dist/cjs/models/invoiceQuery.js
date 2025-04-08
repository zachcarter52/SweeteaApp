"use strict";
exports.__esModule = true;
exports.invoiceQuerySchema = void 0;
var schema_1 = require("../schema");
var invoiceFilter_1 = require("./invoiceFilter");
var invoiceSort_1 = require("./invoiceSort");
exports.invoiceQuerySchema = (0, schema_1.object)({
    filter: ['filter', (0, schema_1.lazy)(function () { return invoiceFilter_1.invoiceFilterSchema; })],
    sort: ['sort', (0, schema_1.optional)((0, schema_1.lazy)(function () { return invoiceSort_1.invoiceSortSchema; }))]
});
//# sourceMappingURL=invoiceQuery.js.map