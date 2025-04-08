import { nullable, object, optional, string } from '../schema';
export const orderLineItemPricingBlocklistsBlockedDiscountSchema = object({
    uid: ['uid', optional(nullable(string()))],
    discountUid: ['discount_uid', optional(nullable(string()))],
    discountCatalogObjectId: [
        'discount_catalog_object_id',
        optional(nullable(string())),
    ],
});
//# sourceMappingURL=orderLineItemPricingBlocklistsBlockedDiscount.js.map