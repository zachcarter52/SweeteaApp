import { lazy, object, optional } from '../schema';
import { orderCreatedSchema } from './orderCreated';
export const orderCreatedObjectSchema = object({
    orderCreated: ['order_created', optional(lazy(() => orderCreatedSchema))],
});
//# sourceMappingURL=orderCreatedObject.js.map