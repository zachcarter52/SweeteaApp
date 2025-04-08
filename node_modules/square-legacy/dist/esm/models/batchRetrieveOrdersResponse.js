import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { orderSchema } from './order';
export const batchRetrieveOrdersResponseSchema = object({
    orders: ['orders', optional(array(lazy(() => orderSchema)))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=batchRetrieveOrdersResponse.js.map