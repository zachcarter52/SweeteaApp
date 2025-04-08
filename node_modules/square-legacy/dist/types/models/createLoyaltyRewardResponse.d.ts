import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyReward } from './loyaltyReward';
/** A response that includes the loyalty reward created. */
export interface CreateLoyaltyRewardResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents a contract to redeem loyalty points for a [reward tier]($m/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state.
     * For more information, see [Manage loyalty rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
     */
    reward?: LoyaltyReward;
}
export declare const createLoyaltyRewardResponseSchema: Schema<CreateLoyaltyRewardResponse>;
