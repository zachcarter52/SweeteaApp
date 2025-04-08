import { nullable, number, object, optional, string } from '../schema';
export const listCustomerSegmentsRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listCustomerSegmentsRequest.js.map