import { lazy, number, object, optional, string } from '../schema';
import { loyaltyEventQuerySchema, } from './loyaltyEventQuery';
export const searchLoyaltyEventsRequestSchema = object({
    query: ['query', optional(lazy(() => loyaltyEventQuerySchema))],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchLoyaltyEventsRequest.js.map