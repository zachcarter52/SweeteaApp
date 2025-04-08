import { nullable, object, optional, string } from '../schema';
export const catalogAvailabilityPeriodSchema = object({
    startLocalTime: ['start_local_time', optional(nullable(string()))],
    endLocalTime: ['end_local_time', optional(nullable(string()))],
    dayOfWeek: ['day_of_week', optional(string())],
});
//# sourceMappingURL=catalogAvailabilityPeriod.js.map