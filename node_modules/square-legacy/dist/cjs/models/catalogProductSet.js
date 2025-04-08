"use strict";
exports.__esModule = true;
exports.catalogProductSetSchema = void 0;
var schema_1 = require("../schema");
exports.catalogProductSetSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    productIdsAny: ['product_ids_any', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    productIdsAll: ['product_ids_all', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    quantityExact: ['quantity_exact', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    quantityMin: ['quantity_min', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    quantityMax: ['quantity_max', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    allProducts: ['all_products', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=catalogProductSet.js.map