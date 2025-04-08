"use strict";
exports.__esModule = true;
exports.createLoyaltyAccountRequestSchema = void 0;
var schema_1 = require("../schema");
var loyaltyAccount_1 = require("./loyaltyAccount");
exports.createLoyaltyAccountRequestSchema = (0, schema_1.object)({
    loyaltyAccount: ['loyalty_account', (0, schema_1.lazy)(function () { return loyaltyAccount_1.loyaltyAccountSchema; })],
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()]
});
//# sourceMappingURL=createLoyaltyAccountRequest.js.map