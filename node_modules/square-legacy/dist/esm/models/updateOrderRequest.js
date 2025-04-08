import { array, lazy, nullable, object, optional, string, } from '../schema';
import { orderSchema } from './order';
export const updateOrderRequestSchema = object({
    order: ['order', optional(lazy(() => orderSchema))],
    fieldsToClear: ['fields_to_clear', optional(nullable(array(string())))],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=updateOrderRequest.js.map