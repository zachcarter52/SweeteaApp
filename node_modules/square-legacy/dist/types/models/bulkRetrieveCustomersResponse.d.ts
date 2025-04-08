import { Schema } from '../schema';
import { Error } from './error';
import { RetrieveCustomerResponse } from './retrieveCustomerResponse';
/**
 * Defines the fields included in the response body from the
 * [BulkRetrieveCustomers]($e/Customers/BulkRetrieveCustomers) endpoint.
 */
export interface BulkRetrieveCustomersResponse {
    /**
     * A map of responses that correspond to individual retrieve requests, represented by
     * key-value pairs.
     * Each key is the customer ID that was specified for a retrieve request and each value
     * is the corresponding response.
     * If the request succeeds, the value is the requested customer profile.
     * If the request fails, the value contains any errors that occurred during the request.
     */
    responses?: Record<string, RetrieveCustomerResponse>;
    /** Any top-level errors that prevented the bulk operation from running. */
    errors?: Error[];
}
export declare const bulkRetrieveCustomersResponseSchema: Schema<BulkRetrieveCustomersResponse>;
