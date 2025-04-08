import { array, lazy, nullable, object, optional, string, } from '../schema';
import { phaseInputSchema } from './phaseInput';
export const swapPlanRequestSchema = object({
    newPlanVariationId: ['new_plan_variation_id', optional(nullable(string()))],
    phases: ['phases', optional(nullable(array(lazy(() => phaseInputSchema))))],
});
//# sourceMappingURL=swapPlanRequest.js.map