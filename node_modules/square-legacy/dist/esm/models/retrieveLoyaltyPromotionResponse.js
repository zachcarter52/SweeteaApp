import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyPromotionSchema } from './loyaltyPromotion';
export const retrieveLoyaltyPromotionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyPromotion: [
        'loyalty_promotion',
        optional(lazy(() => loyaltyPromotionSchema)),
    ],
});
//# sourceMappingURL=retrieveLoyaltyPromotionResponse.js.map