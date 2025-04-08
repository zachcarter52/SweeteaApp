import { array, lazy, number, object, optional, string, } from '../schema';
import { moneySchema } from './money';
import { phaseSchema } from './phase';
import { subscriptionSourceSchema, } from './subscriptionSource';
export const createSubscriptionRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    locationId: ['location_id', string()],
    planVariationId: ['plan_variation_id', optional(string())],
    customerId: ['customer_id', string()],
    startDate: ['start_date', optional(string())],
    canceledDate: ['canceled_date', optional(string())],
    taxPercentage: ['tax_percentage', optional(string())],
    priceOverrideMoney: [
        'price_override_money',
        optional(lazy(() => moneySchema)),
    ],
    cardId: ['card_id', optional(string())],
    timezone: ['timezone', optional(string())],
    source: ['source', optional(lazy(() => subscriptionSourceSchema))],
    monthlyBillingAnchorDate: [
        'monthly_billing_anchor_date',
        optional(number()),
    ],
    phases: ['phases', optional(array(lazy(() => phaseSchema)))],
});
//# sourceMappingURL=createSubscriptionRequest.js.map