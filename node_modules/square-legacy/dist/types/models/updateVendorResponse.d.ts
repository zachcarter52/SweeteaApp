import { Schema } from '../schema';
import { Error } from './error';
import { Vendor } from './vendor';
/** Represents an output from a call to [UpdateVendor]($e/Vendors/UpdateVendor). */
export interface UpdateVendorResponse {
    /** Errors occurred when the request fails. */
    errors?: Error[];
    /** Represents a supplier to a seller. */
    vendor?: Vendor;
}
export declare const updateVendorResponseSchema: Schema<UpdateVendorResponse>;
