import { Schema } from '../schema';
import { Error } from './error';
import { Payment } from './payment';
/** Defines the response returned by [ListPayments]($e/Payments/ListPayments). */
export interface ListPaymentsResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** The requested list of payments. */
    payments?: Payment[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const listPaymentsResponseSchema: Schema<ListPaymentsResponse>;
