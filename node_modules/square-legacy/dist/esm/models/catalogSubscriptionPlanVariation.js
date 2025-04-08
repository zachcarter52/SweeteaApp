import { array, bigint, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { subscriptionPhaseSchema, } from './subscriptionPhase';
export const catalogSubscriptionPlanVariationSchema = object({
    name: ['name', string()],
    phases: ['phases', array(lazy(() => subscriptionPhaseSchema))],
    subscriptionPlanId: ['subscription_plan_id', optional(nullable(string()))],
    monthlyBillingAnchorDate: [
        'monthly_billing_anchor_date',
        optional(nullable(bigint())),
    ],
    canProrate: ['can_prorate', optional(nullable(boolean()))],
    successorPlanVariationId: [
        'successor_plan_variation_id',
        optional(nullable(string())),
    ],
});
//# sourceMappingURL=catalogSubscriptionPlanVariation.js.map