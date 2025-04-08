import { array, lazy, object, optional } from '../schema';
import { checkoutMerchantSettingsSchema, } from './checkoutMerchantSettings';
import { errorSchema } from './error';
export const updateMerchantSettingsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    merchantSettings: [
        'merchant_settings',
        optional(lazy(() => checkoutMerchantSettingsSchema)),
    ],
});
//# sourceMappingURL=updateMerchantSettingsResponse.js.map