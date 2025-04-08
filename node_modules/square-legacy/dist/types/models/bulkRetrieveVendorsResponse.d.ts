import { Schema } from '../schema';
import { Error } from './error';
import { RetrieveVendorResponse } from './retrieveVendorResponse';
/** Represents an output from a call to [BulkRetrieveVendors]($e/Vendors/BulkRetrieveVendors). */
export interface BulkRetrieveVendorsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * The set of [RetrieveVendorResponse](entity:RetrieveVendorResponse) objects encapsulating successfully retrieved [Vendor](entity:Vendor)
     * objects or error responses for failed attempts. The set is represented by
     * a collection of `Vendor`-ID/`Vendor`-object or `Vendor`-ID/error-object pairs.
     */
    responses?: Record<string, RetrieveVendorResponse>;
}
export declare const bulkRetrieveVendorsResponseSchema: Schema<BulkRetrieveVendorsResponse>;
