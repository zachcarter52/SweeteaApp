import { array, lazy, number, object, optional } from '../schema';
import { errorSchema } from './error';
export const bulkSwapPlanResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    affectedSubscriptions: ['affected_subscriptions', optional(number())],
});
//# sourceMappingURL=bulkSwapPlanResponse.js.map