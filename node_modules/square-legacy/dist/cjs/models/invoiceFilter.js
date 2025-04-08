"use strict";
exports.__esModule = true;
exports.invoiceFilterSchema = void 0;
var schema_1 = require("../schema");
exports.invoiceFilterSchema = (0, schema_1.object)({
    locationIds: ['location_ids', (0, schema_1.array)((0, schema_1.string)())],
    customerIds: ['customer_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=invoiceFilter.js.map