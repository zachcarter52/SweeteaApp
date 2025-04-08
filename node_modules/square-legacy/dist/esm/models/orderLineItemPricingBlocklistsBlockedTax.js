import { nullable, object, optional, string } from '../schema';
export const orderLineItemPricingBlocklistsBlockedTaxSchema = object({
    uid: ['uid', optional(nullable(string()))],
    taxUid: ['tax_uid', optional(nullable(string()))],
    taxCatalogObjectId: ['tax_catalog_object_id', optional(nullable(string()))],
});
//# sourceMappingURL=orderLineItemPricingBlocklistsBlockedTax.js.map