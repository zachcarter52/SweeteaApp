import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { orderSchema } from './order';
export const payOrderResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    order: ['order', optional(lazy(() => orderSchema))],
});
//# sourceMappingURL=payOrderResponse.js.map