import { Schema } from '../schema';
import { Error } from './error';
import { UpdateVendorResponse } from './updateVendorResponse';
/** Represents an output from a call to [BulkUpdateVendors]($e/Vendors/BulkUpdateVendors). */
export interface BulkUpdateVendorsResponse {
    /** Errors encountered when the request fails. */
    errors?: Error[];
    /**
     * A set of [UpdateVendorResponse](entity:UpdateVendorResponse) objects encapsulating successfully created [Vendor](entity:Vendor)
     * objects or error responses for failed attempts. The set is represented by a collection of `Vendor`-ID/`UpdateVendorResponse`-object or
     * `Vendor`-ID/error-object pairs.
     */
    responses?: Record<string, UpdateVendorResponse>;
}
export declare const bulkUpdateVendorsResponseSchema: Schema<BulkUpdateVendorsResponse>;
