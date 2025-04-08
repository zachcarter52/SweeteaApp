import { Schema } from '../schema';
/** Additional details about Afterpay payments. */
export interface AfterpayDetails {
    /** Email address on the buyer's Afterpay account. */
    emailAddress?: string | null;
}
export declare const afterpayDetailsSchema: Schema<AfterpayDetails>;
