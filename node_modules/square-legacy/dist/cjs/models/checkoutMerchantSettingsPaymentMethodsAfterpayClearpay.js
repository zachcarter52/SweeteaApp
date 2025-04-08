"use strict";
exports.__esModule = true;
exports.checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema = void 0;
var schema_1 = require("../schema");
var checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange_1 = require("./checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange");
exports.checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema = (0, schema_1.object)({
    orderEligibilityRange: [
        'order_eligibility_range',
        (0, schema_1.optional)((0, schema_1.lazy)(function () {
            return checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange_1.checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema;
        })),
    ],
    itemEligibilityRange: [
        'item_eligibility_range',
        (0, schema_1.optional)((0, schema_1.lazy)(function () {
            return checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange_1.checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema;
        })),
    ],
    enabled: ['enabled', (0, schema_1.optional)((0, schema_1.boolean)())]
});
//# sourceMappingURL=checkoutMerchantSettingsPaymentMethodsAfterpayClearpay.js.map