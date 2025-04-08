import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { phaseSchema } from './phase';
import { subscriptionEventInfoSchema, } from './subscriptionEventInfo';
export const subscriptionEventSchema = object({
    id: ['id', string()],
    subscriptionEventType: ['subscription_event_type', string()],
    effectiveDate: ['effective_date', string()],
    monthlyBillingAnchorDate: ['monthly_billing_anchor_date', optional(number())],
    info: ['info', optional(lazy(() => subscriptionEventInfoSchema))],
    phases: ['phases', optional(nullable(array(lazy(() => phaseSchema))))],
    planVariationId: ['plan_variation_id', string()],
});
//# sourceMappingURL=subscriptionEvent.js.map