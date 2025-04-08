import { Schema } from '../schema';
import { Address } from './address';
import { VendorContact } from './vendorContact';
/** Represents a supplier to a seller. */
export interface Vendor {
    /**
     * A unique Square-generated ID for the [Vendor](entity:Vendor).
     * This field is required when attempting to update a [Vendor](entity:Vendor).
     */
    id?: string;
    /**
     * An RFC 3339-formatted timestamp that indicates when the
     * [Vendor](entity:Vendor) was created.
     */
    createdAt?: string;
    /**
     * An RFC 3339-formatted timestamp that indicates when the
     * [Vendor](entity:Vendor) was last updated.
     */
    updatedAt?: string;
    /**
     * The name of the [Vendor](entity:Vendor).
     * This field is required when attempting to create or update a [Vendor](entity:Vendor).
     */
    name?: string | null;
    /**
     * Represents a postal address in a country.
     * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
     */
    address?: Address;
    /** The contacts of the [Vendor](entity:Vendor). */
    contacts?: VendorContact[] | null;
    /** The account number of the [Vendor](entity:Vendor). */
    accountNumber?: string | null;
    /** A note detailing information about the [Vendor](entity:Vendor). */
    note?: string | null;
    /** The version of the [Vendor](entity:Vendor). */
    version?: number;
    /**
     * The status of the [Vendor]($m/Vendor),
     * whether a [Vendor]($m/Vendor) is active or inactive.
     */
    status?: string;
}
export declare const vendorSchema: Schema<Vendor>;
