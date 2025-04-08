import { Schema } from '../schema';
import { LoyaltyReward } from './loyaltyReward';
/** A request to create a loyalty reward. */
export interface CreateLoyaltyRewardRequest {
    /**
     * Represents a contract to redeem loyalty points for a [reward tier]($m/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state.
     * For more information, see [Manage loyalty rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
     */
    reward: LoyaltyReward;
    /**
     * A unique string that identifies this `CreateLoyaltyReward` request.
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
}
export declare const createLoyaltyRewardRequestSchema: Schema<CreateLoyaltyRewardRequest>;
