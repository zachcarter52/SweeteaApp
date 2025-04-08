import { Schema } from '../schema';
import { Address } from './address';
/**
 * Describes buyer data to prepopulate in the payment form.
 * For more information,
 * see [Optional Checkout Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations).
 */
export interface PrePopulatedData {
    /** The buyer email to prepopulate in the payment form. */
    buyerEmail?: string | null;
    /** The buyer phone number to prepopulate in the payment form. */
    buyerPhoneNumber?: string | null;
    /**
     * Represents a postal address in a country.
     * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
     */
    buyerAddress?: Address;
}
export declare const prePopulatedDataSchema: Schema<PrePopulatedData>;
