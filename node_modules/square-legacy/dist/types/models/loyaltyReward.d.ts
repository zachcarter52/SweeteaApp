import { Schema } from '../schema';
/**
 * Represents a contract to redeem loyalty points for a [reward tier]($m/LoyaltyProgramRewardTier) discount. Loyalty rewards can be in an ISSUED, REDEEMED, or DELETED state.
 * For more information, see [Manage loyalty rewards](https://developer.squareup.com/docs/loyalty-api/loyalty-rewards).
 */
export interface LoyaltyReward {
    /** The Square-assigned ID of the loyalty reward. */
    id?: string;
    /** The status of the loyalty reward. */
    status?: string;
    /** The Square-assigned ID of the [loyalty account](entity:LoyaltyAccount) to which the reward belongs. */
    loyaltyAccountId: string;
    /** The Square-assigned ID of the [reward tier](entity:LoyaltyProgramRewardTier) used to create the reward. */
    rewardTierId: string;
    /** The number of loyalty points used for the reward. */
    points?: number;
    /** The Square-assigned ID of the [order](entity:Order) to which the reward is attached. */
    orderId?: string | null;
    /** The timestamp when the reward was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the reward was last updated, in RFC 3339 format. */
    updatedAt?: string;
    /** The timestamp when the reward was redeemed, in RFC 3339 format. */
    redeemedAt?: string;
}
export declare const loyaltyRewardSchema: Schema<LoyaltyReward>;
