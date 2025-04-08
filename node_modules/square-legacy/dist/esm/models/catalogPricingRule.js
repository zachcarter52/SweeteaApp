import { array, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const catalogPricingRuleSchema = object({
    name: ['name', optional(nullable(string()))],
    timePeriodIds: ['time_period_ids', optional(nullable(array(string())))],
    discountId: ['discount_id', optional(nullable(string()))],
    matchProductsId: ['match_products_id', optional(nullable(string()))],
    applyProductsId: ['apply_products_id', optional(nullable(string()))],
    excludeProductsId: ['exclude_products_id', optional(nullable(string()))],
    validFromDate: ['valid_from_date', optional(nullable(string()))],
    validFromLocalTime: ['valid_from_local_time', optional(nullable(string()))],
    validUntilDate: ['valid_until_date', optional(nullable(string()))],
    validUntilLocalTime: ['valid_until_local_time', optional(nullable(string()))],
    excludeStrategy: ['exclude_strategy', optional(string())],
    minimumOrderSubtotalMoney: [
        'minimum_order_subtotal_money',
        optional(lazy(() => moneySchema)),
    ],
    customerGroupIdsAny: [
        'customer_group_ids_any',
        optional(nullable(array(string()))),
    ],
});
//# sourceMappingURL=catalogPricingRule.js.map