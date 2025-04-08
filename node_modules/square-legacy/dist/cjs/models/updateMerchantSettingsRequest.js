"use strict";
exports.__esModule = true;
exports.updateMerchantSettingsRequestSchema = void 0;
var schema_1 = require("../schema");
var checkoutMerchantSettings_1 = require("./checkoutMerchantSettings");
exports.updateMerchantSettingsRequestSchema = (0, schema_1.object)({
    merchantSettings: [
        'merchant_settings',
        (0, schema_1.lazy)(function () { return checkoutMerchantSettings_1.checkoutMerchantSettingsSchema; }),
    ]
});
//# sourceMappingURL=updateMerchantSettingsRequest.js.map