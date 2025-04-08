import { lazy, object } from '../schema';
import { checkoutMerchantSettingsSchema, } from './checkoutMerchantSettings';
export const updateMerchantSettingsRequestSchema = object({
    merchantSettings: [
        'merchant_settings',
        lazy(() => checkoutMerchantSettingsSchema),
    ],
});
//# sourceMappingURL=updateMerchantSettingsRequest.js.map