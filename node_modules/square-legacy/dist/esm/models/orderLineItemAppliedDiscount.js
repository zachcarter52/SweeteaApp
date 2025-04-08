import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const orderLineItemAppliedDiscountSchema = object({
    uid: ['uid', optional(nullable(string()))],
    discountUid: ['discount_uid', string()],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=orderLineItemAppliedDiscount.js.map