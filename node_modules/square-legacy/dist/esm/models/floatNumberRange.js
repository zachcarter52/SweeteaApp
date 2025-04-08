import { nullable, object, optional, string } from '../schema';
export const floatNumberRangeSchema = object({
    startAt: ['start_at', optional(nullable(string()))],
    endAt: ['end_at', optional(nullable(string()))],
});
//# sourceMappingURL=floatNumberRange.js.map