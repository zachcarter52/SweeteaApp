import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the response returned by
 * [CancelPaymentByIdempotencyKey]($e/Payments/CancelPaymentByIdempotencyKey).
 * On success, `errors` is empty.
 */
export interface CancelPaymentByIdempotencyKeyResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const cancelPaymentByIdempotencyKeyResponseSchema: Schema<CancelPaymentByIdempotencyKeyResponse>;
