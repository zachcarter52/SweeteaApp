import { lazy, object, optional } from '../schema';
import { orderUpdatedSchema } from './orderUpdated';
export const orderUpdatedObjectSchema = object({
    orderUpdated: ['order_updated', optional(lazy(() => orderUpdatedSchema))],
});
//# sourceMappingURL=orderUpdatedObject.js.map