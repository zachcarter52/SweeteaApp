import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { loyaltyPromotionSchema } from './loyaltyPromotion';
export const listLoyaltyPromotionsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyPromotions: [
        'loyalty_promotions',
        optional(array(lazy(() => loyaltyPromotionSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listLoyaltyPromotionsResponse.js.map