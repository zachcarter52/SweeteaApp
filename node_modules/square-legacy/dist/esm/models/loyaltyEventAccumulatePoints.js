import { nullable, number, object, optional, string } from '../schema';
export const loyaltyEventAccumulatePointsSchema = object({
    loyaltyProgramId: ['loyalty_program_id', optional(string())],
    points: ['points', optional(nullable(number()))],
    orderId: ['order_id', optional(nullable(string()))],
});
//# sourceMappingURL=loyaltyEventAccumulatePoints.js.map