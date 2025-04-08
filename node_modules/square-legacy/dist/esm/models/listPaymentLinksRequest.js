import { nullable, number, object, optional, string } from '../schema';
export const listPaymentLinksRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listPaymentLinksRequest.js.map