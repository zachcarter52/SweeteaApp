"use strict";
exports.__esModule = true;
exports.invoiceSortSchema = void 0;
var schema_1 = require("../schema");
exports.invoiceSortSchema = (0, schema_1.object)({
    field: ['field', (0, schema_1.string)()],
    order: ['order', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=invoiceSort.js.map