"use strict";
exports.__esModule = true;
exports.loyaltyRewardSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyRewardSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    loyaltyAccountId: ['loyalty_account_id', (0, schema_1.string)()],
    rewardTierId: ['reward_tier_id', (0, schema_1.string)()],
    points: ['points', (0, schema_1.optional)((0, schema_1.number)())],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    redeemedAt: ['redeemed_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=loyaltyReward.js.map