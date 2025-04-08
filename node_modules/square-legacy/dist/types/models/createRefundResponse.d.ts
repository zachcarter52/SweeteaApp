import { Schema } from '../schema';
import { Error } from './error';
import { Refund } from './refund';
/**
 * Defines the fields that are included in the response body of
 * a request to the [CreateRefund](api-endpoint:Transactions-CreateRefund) endpoint.
 * One of `errors` or `refund` is present in a given response (never both).
 */
export interface CreateRefundResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents a refund processed for a Square transaction. */
    refund?: Refund;
}
export declare const createRefundResponseSchema: Schema<CreateRefundResponse>;
