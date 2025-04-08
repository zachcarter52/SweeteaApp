import { nullable, object, optional, string } from '../schema';
export const timeRangeSchema = object({
    startAt: ['start_at', optional(nullable(string()))],
    endAt: ['end_at', optional(nullable(string()))],
});
//# sourceMappingURL=timeRange.js.map