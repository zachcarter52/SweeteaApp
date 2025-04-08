import { nullable, number, object, optional, string } from '../schema';
export const loyaltyRewardSchema = object({
    id: ['id', optional(string())],
    status: ['status', optional(string())],
    loyaltyAccountId: ['loyalty_account_id', string()],
    rewardTierId: ['reward_tier_id', string()],
    points: ['points', optional(number())],
    orderId: ['order_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    redeemedAt: ['redeemed_at', optional(string())],
});
//# sourceMappingURL=loyaltyReward.js.map