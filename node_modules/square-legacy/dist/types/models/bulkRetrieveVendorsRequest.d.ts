import { Schema } from '../schema';
/** Represents an input to a call to [BulkRetrieveVendors]($e/Vendors/BulkRetrieveVendors). */
export interface BulkRetrieveVendorsRequest {
    /** IDs of the [Vendor](entity:Vendor) objects to retrieve. */
    vendorIds?: string[] | null;
}
export declare const bulkRetrieveVendorsRequestSchema: Schema<BulkRetrieveVendorsRequest>;
