import { Schema } from '../schema';
/** The settings allowed for a payment method. */
export interface CheckoutMerchantSettingsPaymentMethodsPaymentMethod {
    /** Indicates whether the payment method is enabled for the account. */
    enabled?: boolean | null;
}
export declare const checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema: Schema<CheckoutMerchantSettingsPaymentMethodsPaymentMethod>;
