import { array, bigint, dict, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const orderLineItemDiscountSchema = object({
    uid: ['uid', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    name: ['name', optional(nullable(string()))],
    type: ['type', optional(string())],
    percentage: ['percentage', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
    metadata: ['metadata', optional(nullable(dict(string())))],
    scope: ['scope', optional(string())],
    rewardIds: ['reward_ids', optional(array(string()))],
    pricingRuleId: ['pricing_rule_id', optional(string())],
});
//# sourceMappingURL=orderLineItemDiscount.js.map