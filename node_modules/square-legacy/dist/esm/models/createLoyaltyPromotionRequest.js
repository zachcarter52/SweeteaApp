import { lazy, object, string } from '../schema';
import { loyaltyPromotionSchema } from './loyaltyPromotion';
export const createLoyaltyPromotionRequestSchema = object({
    loyaltyPromotion: ['loyalty_promotion', lazy(() => loyaltyPromotionSchema)],
    idempotencyKey: ['idempotency_key', string()],
});
//# sourceMappingURL=createLoyaltyPromotionRequest.js.map