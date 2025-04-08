"use strict";
exports.__esModule = true;
exports.searchLoyaltyRewardsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var loyaltyReward_1 = require("./loyaltyReward");
exports.searchLoyaltyRewardsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    rewards: ['rewards', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return loyaltyReward_1.loyaltyRewardSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchLoyaltyRewardsResponse.js.map