import { nullable, number, object, optional, string } from '../schema';
export const v1ListOrdersRequestSchema = object({
    order: ['order', optional(string())],
    limit: ['limit', optional(nullable(number()))],
    batchToken: ['batch_token', optional(nullable(string()))],
});
//# sourceMappingURL=v1ListOrdersRequest.js.map