import { number, object, optional, string } from '../schema';
export const loyaltyEventCreateRewardSchema = object({
    loyaltyProgramId: ['loyalty_program_id', string()],
    rewardId: ['reward_id', optional(string())],
    points: ['points', number()],
});
//# sourceMappingURL=loyaltyEventCreateReward.js.map