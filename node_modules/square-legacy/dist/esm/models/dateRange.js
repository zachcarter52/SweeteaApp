import { nullable, object, optional, string } from '../schema';
export const dateRangeSchema = object({
    startDate: ['start_date', optional(nullable(string()))],
    endDate: ['end_date', optional(nullable(string()))],
});
//# sourceMappingURL=dateRange.js.map