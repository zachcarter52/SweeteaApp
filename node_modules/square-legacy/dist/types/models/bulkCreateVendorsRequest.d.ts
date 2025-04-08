import { Schema } from '../schema';
import { Vendor } from './vendor';
/** Represents an input to a call to [BulkCreateVendors]($e/Vendors/BulkCreateVendors). */
export interface BulkCreateVendorsRequest {
    /** Specifies a set of new [Vendor](entity:Vendor) objects as represented by a collection of idempotency-key/`Vendor`-object pairs. */
    vendors: Record<string, Vendor>;
}
export declare const bulkCreateVendorsRequestSchema: Schema<BulkCreateVendorsRequest>;
