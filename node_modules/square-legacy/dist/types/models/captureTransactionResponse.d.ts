import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [CaptureTransaction](api-endpoint:Transactions-CaptureTransaction) endpoint.
 */
export interface CaptureTransactionResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const captureTransactionResponseSchema: Schema<CaptureTransactionResponse>;
