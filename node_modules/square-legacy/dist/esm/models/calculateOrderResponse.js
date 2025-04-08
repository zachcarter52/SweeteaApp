import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { orderSchema } from './order';
export const calculateOrderResponseSchema = object({
    order: ['order', optional(lazy(() => orderSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=calculateOrderResponse.js.map