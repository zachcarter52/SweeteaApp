import { nullable, number, object, optional, string } from '../schema';
export const loyaltyPromotionIncentivePointsMultiplierDataSchema = object({
    pointsMultiplier: ['points_multiplier', optional(nullable(number()))],
    multiplier: ['multiplier', optional(nullable(string()))],
});
//# sourceMappingURL=loyaltyPromotionIncentivePointsMultiplierData.js.map