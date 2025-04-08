import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { paymentRefundSchema } from './paymentRefund';
export const getPaymentRefundResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => paymentRefundSchema))],
});
//# sourceMappingURL=getPaymentRefundResponse.js.map