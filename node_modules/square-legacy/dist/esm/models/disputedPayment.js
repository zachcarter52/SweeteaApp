import { nullable, object, optional, string } from '../schema';
export const disputedPaymentSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
});
//# sourceMappingURL=disputedPayment.js.map