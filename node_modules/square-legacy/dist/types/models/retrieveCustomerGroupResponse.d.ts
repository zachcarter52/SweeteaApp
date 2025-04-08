import { Schema } from '../schema';
import { CustomerGroup } from './customerGroup';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [RetrieveCustomerGroup]($e/CustomerGroups/RetrieveCustomerGroup) endpoint.
 * Either `errors` or `group` is present in a given response (never both).
 */
export interface RetrieveCustomerGroupResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents a group of customer profiles.
     * Customer groups can be created, be modified, and have their membership defined using
     * the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
     */
    group?: CustomerGroup;
}
export declare const retrieveCustomerGroupResponseSchema: Schema<RetrieveCustomerGroupResponse>;
