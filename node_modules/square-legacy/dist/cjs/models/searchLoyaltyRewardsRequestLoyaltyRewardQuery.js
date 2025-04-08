"use strict";
exports.__esModule = true;
exports.searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema = void 0;
var schema_1 = require("../schema");
exports.searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema = (0, schema_1.object)({
    loyaltyAccountId: ['loyalty_account_id', (0, schema_1.string)()],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchLoyaltyRewardsRequestLoyaltyRewardQuery.js.map