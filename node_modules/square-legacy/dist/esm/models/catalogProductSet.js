import { array, bigint, boolean, nullable, object, optional, string, } from '../schema';
export const catalogProductSetSchema = object({
    name: ['name', optional(nullable(string()))],
    productIdsAny: ['product_ids_any', optional(nullable(array(string())))],
    productIdsAll: ['product_ids_all', optional(nullable(array(string())))],
    quantityExact: ['quantity_exact', optional(nullable(bigint()))],
    quantityMin: ['quantity_min', optional(nullable(bigint()))],
    quantityMax: ['quantity_max', optional(nullable(bigint()))],
    allProducts: ['all_products', optional(nullable(boolean()))],
});
//# sourceMappingURL=catalogProductSet.js.map