import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the `DeleteCustomerCard` endpoint.
 */
export interface DeleteCustomerCardResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteCustomerCardResponseSchema: Schema<DeleteCustomerCardResponse>;
