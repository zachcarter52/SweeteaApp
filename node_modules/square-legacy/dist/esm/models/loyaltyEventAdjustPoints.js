import { nullable, number, object, optional, string } from '../schema';
export const loyaltyEventAdjustPointsSchema = object({
    loyaltyProgramId: ['loyalty_program_id', optional(string())],
    points: ['points', number()],
    reason: ['reason', optional(nullable(string()))],
});
//# sourceMappingURL=loyaltyEventAdjustPoints.js.map