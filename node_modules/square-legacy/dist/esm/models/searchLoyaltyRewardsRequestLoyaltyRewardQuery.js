import { object, optional, string } from '../schema';
export const searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema = object({
    loyaltyAccountId: ['loyalty_account_id', string()],
    status: ['status', optional(string())],
});
//# sourceMappingURL=searchLoyaltyRewardsRequestLoyaltyRewardQuery.js.map