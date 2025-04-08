import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyPromotionSchema } from './loyaltyPromotion';
export const cancelLoyaltyPromotionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyPromotion: [
        'loyalty_promotion',
        optional(lazy(() => loyaltyPromotionSchema)),
    ],
});
//# sourceMappingURL=cancelLoyaltyPromotionResponse.js.map