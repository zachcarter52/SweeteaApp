import { array, bigint, lazy, nullable, number, object, optional, string, } from '../schema';
import { moneySchema } from './money';
import { phaseSchema } from './phase';
import { subscriptionActionSchema, } from './subscriptionAction';
import { subscriptionSourceSchema, } from './subscriptionSource';
export const subscriptionSchema = object({
    id: ['id', optional(string())],
    locationId: ['location_id', optional(string())],
    planVariationId: ['plan_variation_id', optional(string())],
    customerId: ['customer_id', optional(string())],
    startDate: ['start_date', optional(string())],
    canceledDate: ['canceled_date', optional(nullable(string()))],
    chargedThroughDate: ['charged_through_date', optional(string())],
    status: ['status', optional(string())],
    taxPercentage: ['tax_percentage', optional(nullable(string()))],
    invoiceIds: ['invoice_ids', optional(array(string()))],
    priceOverrideMoney: [
        'price_override_money',
        optional(lazy(() => moneySchema)),
    ],
    version: ['version', optional(bigint())],
    createdAt: ['created_at', optional(string())],
    cardId: ['card_id', optional(nullable(string()))],
    timezone: ['timezone', optional(string())],
    source: ['source', optional(lazy(() => subscriptionSourceSchema))],
    actions: [
        'actions',
        optional(nullable(array(lazy(() => subscriptionActionSchema)))),
    ],
    monthlyBillingAnchorDate: ['monthly_billing_anchor_date', optional(number())],
    phases: ['phases', optional(array(lazy(() => phaseSchema)))],
});
//# sourceMappingURL=subscription.js.map