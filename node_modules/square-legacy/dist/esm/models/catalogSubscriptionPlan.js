import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { subscriptionPhaseSchema, } from './subscriptionPhase';
export const catalogSubscriptionPlanSchema = object({
    name: ['name', string()],
    phases: [
        'phases',
        optional(nullable(array(lazy(() => subscriptionPhaseSchema)))),
    ],
    subscriptionPlanVariations: [
        'subscription_plan_variations',
        optional(nullable(array(lazy(() => catalogObjectSchema)))),
    ],
    eligibleItemIds: ['eligible_item_ids', optional(nullable(array(string())))],
    eligibleCategoryIds: [
        'eligible_category_ids',
        optional(nullable(array(string()))),
    ],
    allItems: ['all_items', optional(nullable(boolean()))],
});
//# sourceMappingURL=catalogSubscriptionPlan.js.map