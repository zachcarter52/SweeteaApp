import { lazy, object, optional, string } from '../schema';
import { orderSchema } from './order';
export const createOrderRequestSchema = object({
    order: ['order', optional(lazy(() => orderSchema))],
    idempotencyKey: ['idempotency_key', optional(string())],
});
//# sourceMappingURL=createOrderRequest.js.map