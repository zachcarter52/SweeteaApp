"use strict";
exports.__esModule = true;
exports.searchLoyaltyRewardsRequestSchema = void 0;
var schema_1 = require("../schema");
var searchLoyaltyRewardsRequestLoyaltyRewardQuery_1 = require("./searchLoyaltyRewardsRequestLoyaltyRewardQuery");
exports.searchLoyaltyRewardsRequestSchema = (0, schema_1.object)({
    query: [
        'query',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchLoyaltyRewardsRequestLoyaltyRewardQuery_1.searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema; })),
    ],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchLoyaltyRewardsRequest.js.map