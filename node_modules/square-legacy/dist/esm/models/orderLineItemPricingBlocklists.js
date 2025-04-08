import { array, lazy, nullable, object, optional } from '../schema';
import { orderLineItemPricingBlocklistsBlockedDiscountSchema, } from './orderLineItemPricingBlocklistsBlockedDiscount';
import { orderLineItemPricingBlocklistsBlockedTaxSchema, } from './orderLineItemPricingBlocklistsBlockedTax';
export const orderLineItemPricingBlocklistsSchema = object({
    blockedDiscounts: [
        'blocked_discounts',
        optional(nullable(array(lazy(() => orderLineItemPricingBlocklistsBlockedDiscountSchema)))),
    ],
    blockedTaxes: [
        'blocked_taxes',
        optional(nullable(array(lazy(() => orderLineItemPricingBlocklistsBlockedTaxSchema)))),
    ],
});
//# sourceMappingURL=orderLineItemPricingBlocklists.js.map