import { lazy, object } from '../schema';
import { moneySchema } from './money';
export const checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema = object({
    min: ['min', lazy(() => moneySchema)],
    max: ['max', lazy(() => moneySchema)],
});
//# sourceMappingURL=checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange.js.map