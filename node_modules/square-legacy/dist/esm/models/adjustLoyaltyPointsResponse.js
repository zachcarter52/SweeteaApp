import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyEventSchema } from './loyaltyEvent';
export const adjustLoyaltyPointsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    event: ['event', optional(lazy(() => loyaltyEventSchema))],
});
//# sourceMappingURL=adjustLoyaltyPointsResponse.js.map