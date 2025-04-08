"use strict";
exports.__esModule = true;
exports.createLoyaltyRewardRequestSchema = void 0;
var schema_1 = require("../schema");
var loyaltyReward_1 = require("./loyaltyReward");
exports.createLoyaltyRewardRequestSchema = (0, schema_1.object)({
    reward: ['reward', (0, schema_1.lazy)(function () { return loyaltyReward_1.loyaltyRewardSchema; })],
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()]
});
//# sourceMappingURL=createLoyaltyRewardRequest.js.map