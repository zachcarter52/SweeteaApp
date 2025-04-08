import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { paymentSchema } from './payment';
export const cancelPaymentResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    payment: ['payment', optional(lazy(() => paymentSchema))],
});
//# sourceMappingURL=cancelPaymentResponse.js.map