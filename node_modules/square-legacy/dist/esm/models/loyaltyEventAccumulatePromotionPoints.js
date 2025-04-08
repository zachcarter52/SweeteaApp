import { number, object, optional, string } from '../schema';
export const loyaltyEventAccumulatePromotionPointsSchema = object({
    loyaltyProgramId: ['loyalty_program_id', optional(string())],
    loyaltyPromotionId: ['loyalty_promotion_id', optional(string())],
    points: ['points', number()],
    orderId: ['order_id', string()],
});
//# sourceMappingURL=loyaltyEventAccumulatePromotionPoints.js.map