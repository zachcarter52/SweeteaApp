import { lazy, nullable, object, optional, string } from '../schema';
import { dateRangeSchema } from './dateRange';
export const shiftWorkdaySchema = object({
    dateRange: ['date_range', optional(lazy(() => dateRangeSchema))],
    matchShiftsBy: ['match_shifts_by', optional(string())],
    defaultTimezone: ['default_timezone', optional(nullable(string()))],
});
//# sourceMappingURL=shiftWorkday.js.map