import { lazy, object, optional } from '../schema';
import { checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema, } from './checkoutMerchantSettingsPaymentMethodsAfterpayClearpay';
import { checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema, } from './checkoutMerchantSettingsPaymentMethodsPaymentMethod';
export const checkoutMerchantSettingsPaymentMethodsSchema = object({
    applePay: [
        'apple_pay',
        optional(lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)),
    ],
    googlePay: [
        'google_pay',
        optional(lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)),
    ],
    cashApp: [
        'cash_app',
        optional(lazy(() => checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema)),
    ],
    afterpayClearpay: [
        'afterpay_clearpay',
        optional(lazy(() => checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema)),
    ],
});
//# sourceMappingURL=checkoutMerchantSettingsPaymentMethods.js.map