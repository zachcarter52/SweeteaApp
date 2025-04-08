import { Schema } from '../schema';
import { LoyaltyProgramAccrualRule } from './loyaltyProgramAccrualRule';
import { LoyaltyProgramExpirationPolicy } from './loyaltyProgramExpirationPolicy';
import { LoyaltyProgramRewardTier } from './loyaltyProgramRewardTier';
import { LoyaltyProgramTerminology } from './loyaltyProgramTerminology';
/**
 * Represents a Square loyalty program. Loyalty programs define how buyers can earn points and redeem points for rewards.
 * Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard.
 * For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export interface LoyaltyProgram {
    /**
     * The Square-assigned ID of the loyalty program. Updates to
     * the loyalty program do not modify the identifier.
     */
    id?: string;
    /** Indicates whether the program is currently active. */
    status?: string;
    /** The list of rewards for buyers, sorted by ascending points. */
    rewardTiers?: LoyaltyProgramRewardTier[] | null;
    /** Describes when the loyalty program expires. */
    expirationPolicy?: LoyaltyProgramExpirationPolicy;
    /** Represents the naming used for loyalty points. */
    terminology?: LoyaltyProgramTerminology;
    /** The [locations](entity:Location) at which the program is active. */
    locationIds?: string[] | null;
    /** The timestamp when the program was created, in RFC 3339 format. */
    createdAt?: string;
    /** The timestamp when the reward was last updated, in RFC 3339 format. */
    updatedAt?: string;
    /**
     * Defines how buyers can earn loyalty points from the base loyalty program.
     * To check for associated [loyalty promotions](entity:LoyaltyPromotion) that enable
     * buyers to earn extra points, call [ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions).
     */
    accrualRules?: LoyaltyProgramAccrualRule[] | null;
}
export declare const loyaltyProgramSchema: Schema<LoyaltyProgram>;
