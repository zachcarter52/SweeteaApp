import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyPromotionSchema } from './loyaltyPromotion';
export const createLoyaltyPromotionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyPromotion: [
        'loyalty_promotion',
        optional(lazy(() => loyaltyPromotionSchema)),
    ],
});
//# sourceMappingURL=createLoyaltyPromotionResponse.js.map