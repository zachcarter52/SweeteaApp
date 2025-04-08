import { bigint, lazy, nullable, number, object, optional, string, } from '../schema';
import { moneySchema } from './money';
import { subscriptionPricingSchema, } from './subscriptionPricing';
export const subscriptionPhaseSchema = object({
    uid: ['uid', optional(nullable(string()))],
    cadence: ['cadence', string()],
    periods: ['periods', optional(nullable(number()))],
    recurringPriceMoney: [
        'recurring_price_money',
        optional(lazy(() => moneySchema)),
    ],
    ordinal: ['ordinal', optional(nullable(bigint()))],
    pricing: ['pricing', optional(lazy(() => subscriptionPricingSchema))],
});
//# sourceMappingURL=subscriptionPhase.js.map