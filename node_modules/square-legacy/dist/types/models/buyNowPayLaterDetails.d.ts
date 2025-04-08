import { Schema } from '../schema';
import { AfterpayDetails } from './afterpayDetails';
import { ClearpayDetails } from './clearpayDetails';
/** Additional details about a Buy Now Pay Later payment type. */
export interface BuyNowPayLaterDetails {
    /**
     * The brand used for the Buy Now Pay Later payment.
     * The brand can be `AFTERPAY`, `CLEARPAY` or `UNKNOWN`.
     */
    brand?: string | null;
    /** Additional details about Afterpay payments. */
    afterpayDetails?: AfterpayDetails;
    /** Additional details about Clearpay payments. */
    clearpayDetails?: ClearpayDetails;
}
export declare const buyNowPayLaterDetailsSchema: Schema<BuyNowPayLaterDetails>;
