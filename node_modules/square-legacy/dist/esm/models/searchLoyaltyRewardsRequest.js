import { lazy, number, object, optional, string } from '../schema';
import { searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema, } from './searchLoyaltyRewardsRequestLoyaltyRewardQuery';
export const searchLoyaltyRewardsRequestSchema = object({
    query: [
        'query',
        optional(lazy(() => searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema)),
    ],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchLoyaltyRewardsRequest.js.map