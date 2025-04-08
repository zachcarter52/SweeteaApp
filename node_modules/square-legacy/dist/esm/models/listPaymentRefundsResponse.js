import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { paymentRefundSchema } from './paymentRefund';
export const listPaymentRefundsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refunds: ['refunds', optional(array(lazy(() => paymentRefundSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listPaymentRefundsResponse.js.map