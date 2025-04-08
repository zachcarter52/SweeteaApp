import { nullable, object, optional, string } from '../schema';
export const businessHoursPeriodSchema = object({
    dayOfWeek: ['day_of_week', optional(string())],
    startLocalTime: ['start_local_time', optional(nullable(string()))],
    endLocalTime: ['end_local_time', optional(nullable(string()))],
});
//# sourceMappingURL=businessHoursPeriod.js.map