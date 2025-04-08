import { Schema } from '../schema';
export interface AcceptedPaymentMethods {
    /** Whether Apple Pay is accepted at checkout. */
    applePay?: boolean | null;
    /** Whether Google Pay is accepted at checkout. */
    googlePay?: boolean | null;
    /** Whether Cash App Pay is accepted at checkout. */
    cashAppPay?: boolean | null;
    /** Whether Afterpay/Clearpay is accepted at checkout. */
    afterpayClearpay?: boolean | null;
}
export declare const acceptedPaymentMethodsSchema: Schema<AcceptedPaymentMethods>;
