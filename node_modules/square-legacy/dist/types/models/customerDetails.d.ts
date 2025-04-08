import { Schema } from '../schema';
/** Details about the customer making the payment. */
export interface CustomerDetails {
    /** Indicates whether the customer initiated the payment. */
    customerInitiated?: boolean | null;
    /**
     * Indicates that the seller keyed in payment details on behalf of the customer.
     * This is used to flag a payment as Mail Order / Telephone Order (MOTO).
     */
    sellerKeyedIn?: boolean | null;
}
export declare const customerDetailsSchema: Schema<CustomerDetails>;
