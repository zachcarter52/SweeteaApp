import { number, object, string } from '../schema';
export const loyaltyEventExpirePointsSchema = object({
    loyaltyProgramId: ['loyalty_program_id', string()],
    points: ['points', number()],
});
//# sourceMappingURL=loyaltyEventExpirePoints.js.map