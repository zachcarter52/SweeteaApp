"use strict";
exports.__esModule = true;
exports.retrieveMerchantSettingsResponseSchema = void 0;
var schema_1 = require("../schema");
var checkoutMerchantSettings_1 = require("./checkoutMerchantSettings");
var error_1 = require("./error");
exports.retrieveMerchantSettingsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    merchantSettings: [
        'merchant_settings',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutMerchantSettings_1.checkoutMerchantSettingsSchema; })),
    ]
});
//# sourceMappingURL=retrieveMerchantSettingsResponse.js.map