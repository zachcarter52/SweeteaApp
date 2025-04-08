import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [AddGroupToCustomer]($e/Customers/AddGroupToCustomer) endpoint.
 */
export interface AddGroupToCustomerResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const addGroupToCustomerResponseSchema: Schema<AddGroupToCustomerResponse>;
