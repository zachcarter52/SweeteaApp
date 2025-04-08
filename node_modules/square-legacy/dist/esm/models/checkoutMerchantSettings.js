import { lazy, object, optional, string } from '../schema';
import { checkoutMerchantSettingsPaymentMethodsSchema, } from './checkoutMerchantSettingsPaymentMethods';
export const checkoutMerchantSettingsSchema = object({
    paymentMethods: [
        'payment_methods',
        optional(lazy(() => checkoutMerchantSettingsPaymentMethodsSchema)),
    ],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=checkoutMerchantSettings.js.map