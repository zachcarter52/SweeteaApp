import { Schema } from '../schema';
import { Error } from './error';
import { Vendor } from './vendor';
/** Represents an output from a call to [CreateVendor]($e/Vendors/CreateVendor). */
export interface CreateVendorResponse {
    /** Errors encountered when the request fails. */
    errors?: Error[];
    /** Represents a supplier to a seller. */
    vendor?: Vendor;
}
export declare const createVendorResponseSchema: Schema<CreateVendorResponse>;
