"use strict";
exports.__esModule = true;
exports.checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRangeSchema = (0, schema_1.object)({
    min: ['min', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    max: ['max', (0, schema_1.lazy)(function () { return money_1.moneySchema; })]
});
//# sourceMappingURL=checkoutMerchantSettingsPaymentMethodsAfterpayClearpayEligibilityRange.js.map