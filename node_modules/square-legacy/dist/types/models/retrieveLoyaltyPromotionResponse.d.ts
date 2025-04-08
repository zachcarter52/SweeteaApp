import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyPromotion } from './loyaltyPromotion';
/** Represents a [RetrieveLoyaltyPromotionPromotions]($e/Loyalty/RetrieveLoyaltyPromotion) response. */
export interface RetrieveLoyaltyPromotionResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents a promotion for a [loyalty program]($m/LoyaltyProgram). Loyalty promotions enable buyers
     * to earn extra points on top of those earned from the base program.
     * A loyalty program can have a maximum of 10 loyalty promotions with an `ACTIVE` or `SCHEDULED` status.
     */
    loyaltyPromotion?: LoyaltyPromotion;
}
export declare const retrieveLoyaltyPromotionResponseSchema: Schema<RetrieveLoyaltyPromotionResponse>;
