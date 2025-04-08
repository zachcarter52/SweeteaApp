import { Schema } from '../schema';
/** Represents a contact of a [Vendor]($m/Vendor). */
export interface VendorContact {
    /**
     * A unique Square-generated ID for the [VendorContact](entity:VendorContact).
     * This field is required when attempting to update a [VendorContact](entity:VendorContact).
     */
    id?: string;
    /**
     * The name of the [VendorContact](entity:VendorContact).
     * This field is required when attempting to create a [Vendor](entity:Vendor).
     */
    name?: string | null;
    /** The email address of the [VendorContact](entity:VendorContact). */
    emailAddress?: string | null;
    /** The phone number of the [VendorContact](entity:VendorContact). */
    phoneNumber?: string | null;
    /** The state of the [VendorContact](entity:VendorContact). */
    removed?: boolean | null;
    /** The ordinal of the [VendorContact](entity:VendorContact). */
    ordinal: number;
}
export declare const vendorContactSchema: Schema<VendorContact>;
