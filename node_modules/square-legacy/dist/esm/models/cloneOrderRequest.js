import { nullable, number, object, optional, string } from '../schema';
export const cloneOrderRequestSchema = object({
    orderId: ['order_id', string()],
    version: ['version', optional(number())],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=cloneOrderRequest.js.map