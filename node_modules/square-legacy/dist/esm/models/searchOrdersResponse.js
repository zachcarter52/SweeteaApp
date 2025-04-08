import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { orderSchema } from './order';
import { orderEntrySchema } from './orderEntry';
export const searchOrdersResponseSchema = object({
    orderEntries: [
        'order_entries',
        optional(array(lazy(() => orderEntrySchema))),
    ],
    orders: ['orders', optional(array(lazy(() => orderSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=searchOrdersResponse.js.map