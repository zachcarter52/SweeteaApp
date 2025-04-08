"use strict";
exports.__esModule = true;
exports.redeemLoyaltyRewardResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var loyaltyEvent_1 = require("./loyaltyEvent");
exports.redeemLoyaltyRewardResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    event: ['event', (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEvent_1.loyaltyEventSchema; }))]
});
//# sourceMappingURL=redeemLoyaltyRewardResponse.js.map