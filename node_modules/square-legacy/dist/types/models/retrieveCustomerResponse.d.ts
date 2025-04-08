import { Schema } from '../schema';
import { Customer } from './customer';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the `RetrieveCustomer` endpoint.
 * Either `errors` or `customer` is present in a given response (never both).
 */
export interface RetrieveCustomerResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents a Square customer profile in the Customer Directory of a Square seller. */
    customer?: Customer;
}
export declare const retrieveCustomerResponseSchema: Schema<RetrieveCustomerResponse>;
