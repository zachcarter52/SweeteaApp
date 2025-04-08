import { lazy, object, optional, string } from '../schema';
import { paymentSchema } from './payment';
export const updatePaymentRequestSchema = object({
    payment: ['payment', optional(lazy(() => paymentSchema))],
    idempotencyKey: ['idempotency_key', string()],
});
//# sourceMappingURL=updatePaymentRequest.js.map