import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const deletePaymentLinkResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    id: ['id', optional(string())],
    cancelledOrderId: ['cancelled_order_id', optional(string())],
});
//# sourceMappingURL=deletePaymentLinkResponse.js.map