import { Schema } from '../schema';
import { LoyaltyPromotionIncentivePointsAdditionData } from './loyaltyPromotionIncentivePointsAdditionData';
import { LoyaltyPromotionIncentivePointsMultiplierData } from './loyaltyPromotionIncentivePointsMultiplierData';
/**
 * Represents how points for a [loyalty promotion]($m/LoyaltyPromotion) are calculated,
 * either by multiplying the points earned from the base program or by adding a specified number
 * of points to the points earned from the base program.
 */
export interface LoyaltyPromotionIncentive {
    /**
     * Indicates the type of points incentive for a [loyalty promotion]($m/LoyaltyPromotion),
     * which is used to determine how buyers can earn points from the promotion.
     */
    type: string;
    /** Represents the metadata for a `POINTS_MULTIPLIER` type of [loyalty promotion incentive]($m/LoyaltyPromotionIncentive). */
    pointsMultiplierData?: LoyaltyPromotionIncentivePointsMultiplierData;
    /** Represents the metadata for a `POINTS_ADDITION` type of [loyalty promotion incentive]($m/LoyaltyPromotionIncentive). */
    pointsAdditionData?: LoyaltyPromotionIncentivePointsAdditionData;
}
export declare const loyaltyPromotionIncentiveSchema: Schema<LoyaltyPromotionIncentive>;
