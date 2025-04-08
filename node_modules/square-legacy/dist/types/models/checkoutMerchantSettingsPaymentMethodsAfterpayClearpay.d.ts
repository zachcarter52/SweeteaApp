import { Schema } from '../schema';
import { CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange } from './checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange';
/** The settings allowed for AfterpayClearpay. */
export interface CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay {
    /** A range of purchase price that qualifies. */
    orderEligibilityRange?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
    /** A range of purchase price that qualifies. */
    itemEligibilityRange?: CheckoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange;
    /** Indicates whether the payment method is enabled for the account. */
    enabled?: boolean;
}
export declare const checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema: Schema<CheckoutMerchantSettingsPaymentMethodsAfterpayClearpay>;
