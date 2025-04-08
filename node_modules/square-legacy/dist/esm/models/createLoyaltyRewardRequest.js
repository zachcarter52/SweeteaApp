import { lazy, object, string } from '../schema';
import { loyaltyRewardSchema } from './loyaltyReward';
export const createLoyaltyRewardRequestSchema = object({
    reward: ['reward', lazy(() => loyaltyRewardSchema)],
    idempotencyKey: ['idempotency_key', string()],
});
//# sourceMappingURL=createLoyaltyRewardRequest.js.map