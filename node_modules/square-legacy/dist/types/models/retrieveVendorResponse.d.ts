import { Schema } from '../schema';
import { Error } from './error';
import { Vendor } from './vendor';
/** Represents an output from a call to [RetrieveVendor]($e/Vendors/RetrieveVendor). */
export interface RetrieveVendorResponse {
    /** Errors encountered when the request fails. */
    errors?: Error[];
    /** Represents a supplier to a seller. */
    vendor?: Vendor;
}
export declare const retrieveVendorResponseSchema: Schema<RetrieveVendorResponse>;
