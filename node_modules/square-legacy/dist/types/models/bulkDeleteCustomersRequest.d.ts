import { Schema } from '../schema';
/**
 * Defines the body parameters that can be included in requests to the
 * [BulkDeleteCustomers]($e/Customers/BulkDeleteCustomers) endpoint.
 */
export interface BulkDeleteCustomersRequest {
    /** The IDs of the [customer profiles](entity:Customer) to delete. */
    customerIds: string[];
}
export declare const bulkDeleteCustomersRequestSchema: Schema<BulkDeleteCustomersRequest>;
