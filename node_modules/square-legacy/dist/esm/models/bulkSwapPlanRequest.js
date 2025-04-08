import { object, string } from '../schema';
export const bulkSwapPlanRequestSchema = object({
    newPlanVariationId: ['new_plan_variation_id', string()],
    oldPlanVariationId: ['old_plan_variation_id', string()],
    locationId: ['location_id', string()],
});
//# sourceMappingURL=bulkSwapPlanRequest.js.map