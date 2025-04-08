import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [DeleteCustomerGroup]($e/CustomerGroups/DeleteCustomerGroup) endpoint.
 */
export interface DeleteCustomerGroupResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteCustomerGroupResponseSchema: Schema<DeleteCustomerGroupResponse>;
