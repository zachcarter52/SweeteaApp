import { Schema } from '../schema';
import { Error } from './error';
import { PaymentRefund } from './paymentRefund';
/**
 * Defines the response returned by [ListPaymentRefunds]($e/Refunds/ListPaymentRefunds).
 * Either `errors` or `refunds` is present in a given response (never both).
 */
export interface ListPaymentRefundsResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** The list of requested refunds. */
    refunds?: PaymentRefund[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const listPaymentRefundsResponseSchema: Schema<ListPaymentRefundsResponse>;
