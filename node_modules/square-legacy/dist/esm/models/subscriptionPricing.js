import { array, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const subscriptionPricingSchema = object({
    type: ['type', optional(string())],
    discountIds: ['discount_ids', optional(nullable(array(string())))],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=subscriptionPricing.js.map