import { object, optional, string } from '../schema';
export const loyaltyEventRedeemRewardSchema = object({
    loyaltyProgramId: ['loyalty_program_id', string()],
    rewardId: ['reward_id', optional(string())],
    orderId: ['order_id', optional(string())],
});
//# sourceMappingURL=loyaltyEventRedeemReward.js.map