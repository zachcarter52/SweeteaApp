import { Schema } from '../schema';
/**
 * Defines the body parameters that can be included in requests to the
 * [BulkRetrieveCustomers]($e/Customers/BulkRetrieveCustomers) endpoint.
 */
export interface BulkRetrieveCustomersRequest {
    /** The IDs of the [customer profiles](entity:Customer) to retrieve. */
    customerIds: string[];
}
export declare const bulkRetrieveCustomersRequestSchema: Schema<BulkRetrieveCustomersRequest>;
