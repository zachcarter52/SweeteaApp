import { number, object, optional, string } from '../schema';
export const loyaltyEventDeleteRewardSchema = object({
    loyaltyProgramId: ['loyalty_program_id', string()],
    rewardId: ['reward_id', optional(string())],
    points: ['points', number()],
});
//# sourceMappingURL=loyaltyEventDeleteReward.js.map