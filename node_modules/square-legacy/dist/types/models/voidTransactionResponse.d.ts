import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [VoidTransaction](api-endpoint:Transactions-VoidTransaction) endpoint.
 */
export interface VoidTransactionResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const voidTransactionResponseSchema: Schema<VoidTransactionResponse>;
