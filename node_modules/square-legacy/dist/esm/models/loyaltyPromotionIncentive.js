import { lazy, object, optional, string } from '../schema';
import { loyaltyPromotionIncentivePointsAdditionDataSchema, } from './loyaltyPromotionIncentivePointsAdditionData';
import { loyaltyPromotionIncentivePointsMultiplierDataSchema, } from './loyaltyPromotionIncentivePointsMultiplierData';
export const loyaltyPromotionIncentiveSchema = object({
    type: ['type', string()],
    pointsMultiplierData: [
        'points_multiplier_data',
        optional(lazy(() => loyaltyPromotionIncentivePointsMultiplierDataSchema)),
    ],
    pointsAdditionData: [
        'points_addition_data',
        optional(lazy(() => loyaltyPromotionIncentivePointsAdditionDataSchema)),
    ],
});
//# sourceMappingURL=loyaltyPromotionIncentive.js.map