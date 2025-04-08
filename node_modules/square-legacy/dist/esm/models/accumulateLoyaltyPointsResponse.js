import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyEventSchema } from './loyaltyEvent';
export const accumulateLoyaltyPointsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    event: ['event', optional(lazy(() => loyaltyEventSchema))],
    events: ['events', optional(array(lazy(() => loyaltyEventSchema)))],
});
//# sourceMappingURL=accumulateLoyaltyPointsResponse.js.map