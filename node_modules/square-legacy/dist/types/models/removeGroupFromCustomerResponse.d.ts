import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [RemoveGroupFromCustomer]($e/Customers/RemoveGroupFromCustomer)
 * endpoint.
 */
export interface RemoveGroupFromCustomerResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const removeGroupFromCustomerResponseSchema: Schema<RemoveGroupFromCustomerResponse>;
