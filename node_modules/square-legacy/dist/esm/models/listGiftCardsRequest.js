import { nullable, number, object, optional, string } from '../schema';
export const listGiftCardsRequestSchema = object({
    type: ['type', optional(nullable(string()))],
    state: ['state', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
});
//# sourceMappingURL=listGiftCardsRequest.js.map