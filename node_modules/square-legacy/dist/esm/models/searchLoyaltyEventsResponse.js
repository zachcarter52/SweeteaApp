import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { loyaltyEventSchema } from './loyaltyEvent';
export const searchLoyaltyEventsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    events: ['events', optional(array(lazy(() => loyaltyEventSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchLoyaltyEventsResponse.js.map