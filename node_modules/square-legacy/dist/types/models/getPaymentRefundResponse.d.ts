import { Schema } from '../schema';
import { Error } from './error';
import { PaymentRefund } from './paymentRefund';
/**
 * Defines the response returned by [GetRefund]($e/Refunds/GetPaymentRefund).
 * Note: If there are errors processing the request, the refund field might not be
 * present or it might be present in a FAILED state.
 */
export interface GetPaymentRefundResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a refund of a payment made using Square. Contains information about
     * the original payment and the amount of money refunded.
     */
    refund?: PaymentRefund;
}
export declare const getPaymentRefundResponseSchema: Schema<GetPaymentRefundResponse>;
