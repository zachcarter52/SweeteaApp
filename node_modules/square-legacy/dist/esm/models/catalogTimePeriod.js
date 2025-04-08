import { nullable, object, optional, string } from '../schema';
export const catalogTimePeriodSchema = object({
    event: ['event', optional(nullable(string()))],
});
//# sourceMappingURL=catalogTimePeriod.js.map