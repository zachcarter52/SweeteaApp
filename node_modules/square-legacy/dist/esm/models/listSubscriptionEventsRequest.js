import { nullable, number, object, optional, string } from '../schema';
export const listSubscriptionEventsRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listSubscriptionEventsRequest.js.map