import { boolean, lazy, object, optional } from '../schema';
import { checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema, } from './checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange';
export const checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema = object({
    orderEligibilityRange: [
        'order_eligibility_range',
        optional(lazy(() => checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema)),
    ],
    itemEligibilityRange: [
        'item_eligibility_range',
        optional(lazy(() => checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema)),
    ],
    enabled: ['enabled', optional(boolean())],
});
//# sourceMappingURL=checkoutMerchantSettingsPaymentMethodsAfterpayClearpay.js.map