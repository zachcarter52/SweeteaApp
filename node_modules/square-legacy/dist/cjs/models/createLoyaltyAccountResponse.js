"use strict";
exports.__esModule = true;
exports.createLoyaltyAccountResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var loyaltyAccount_1 = require("./loyaltyAccount");
exports.createLoyaltyAccountResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    loyaltyAccount: [
        'loyalty_account',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyAccount_1.loyaltyAccountSchema; })),
    ]
});
//# sourceMappingURL=createLoyaltyAccountResponse.js.map