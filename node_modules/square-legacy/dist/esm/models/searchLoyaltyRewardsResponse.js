import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { loyaltyRewardSchema } from './loyaltyReward';
export const searchLoyaltyRewardsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    rewards: ['rewards', optional(array(lazy(() => loyaltyRewardSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchLoyaltyRewardsResponse.js.map