import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { paymentRefundSchema } from './paymentRefund';
export const refundPaymentResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => paymentRefundSchema))],
});
//# sourceMappingURL=refundPaymentResponse.js.map