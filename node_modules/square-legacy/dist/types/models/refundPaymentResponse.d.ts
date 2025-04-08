import { Schema } from '../schema';
import { Error } from './error';
import { PaymentRefund } from './paymentRefund';
/**
 * Defines the response returned by
 * [RefundPayment]($e/Refunds/RefundPayment).
 * If there are errors processing the request, the `refund` field might not be
 * present, or it might be present with a status of `FAILED`.
 */
export interface RefundPaymentResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a refund of a payment made using Square. Contains information about
     * the original payment and the amount of money refunded.
     */
    refund?: PaymentRefund;
}
export declare const refundPaymentResponseSchema: Schema<RefundPaymentResponse>;
