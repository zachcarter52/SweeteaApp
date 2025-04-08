import { Schema } from '../schema';
import { CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay } from './checkoutMerchantSettingsPaymentMethodsAfterpayClearpay';
import { CheckoutMerchantSettingsPaymentMethodsPaymentMethod } from './checkoutMerchantSettingsPaymentMethodsPaymentMethod';
export interface CheckoutMerchantSettingsPaymentMethods {
    /** The settings allowed for a payment method. */
    applePay?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
    /** The settings allowed for a payment method. */
    googlePay?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
    /** The settings allowed for a payment method. */
    cashApp?: CheckoutMerchantSettingsPaymentMethodsPaymentMethod;
    /** The settings allowed for AfterpayClearpay. */
    afterpayClearpay?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay;
}
export declare const checkoutMerchantSettingsPaymentMethodsSchema: Schema<CheckoutMerchantSettingsPaymentMethods>;
