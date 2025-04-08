import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { phaseSchema } from './phase';
export const subscriptionActionSchema = object({
    id: ['id', optional(string())],
    type: ['type', optional(string())],
    effectiveDate: ['effective_date', optional(nullable(string()))],
    monthlyBillingAnchorDate: [
        'monthly_billing_anchor_date',
        optional(nullable(number())),
    ],
    phases: ['phases', optional(nullable(array(lazy(() => phaseSchema))))],
    newPlanVariationId: ['new_plan_variation_id', optional(nullable(string()))],
});
//# sourceMappingURL=subscriptionAction.js.map