import { array, nullable, number, object, optional, string, } from '../schema';
export const payOrderRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    orderVersion: ['order_version', optional(nullable(number()))],
    paymentIds: ['payment_ids', optional(nullable(array(string())))],
});
//# sourceMappingURL=payOrderRequest.js.map