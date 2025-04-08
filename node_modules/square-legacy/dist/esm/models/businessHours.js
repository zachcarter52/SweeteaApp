import { array, lazy, nullable, object, optional } from '../schema';
import { businessHoursPeriodSchema, } from './businessHoursPeriod';
export const businessHoursSchema = object({
    periods: [
        'periods',
        optional(nullable(array(lazy(() => businessHoursPeriodSchema)))),
    ],
});
//# sourceMappingURL=businessHours.js.map