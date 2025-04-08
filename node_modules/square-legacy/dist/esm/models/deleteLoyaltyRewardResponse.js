import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteLoyaltyRewardResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteLoyaltyRewardResponse.js.map