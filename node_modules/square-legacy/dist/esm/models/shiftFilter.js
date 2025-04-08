import { array, lazy, nullable, object, optional, string, } from '../schema';
import { shiftWorkdaySchema } from './shiftWorkday';
import { timeRangeSchema } from './timeRange';
export const shiftFilterSchema = object({
    locationIds: ['location_ids', optional(nullable(array(string())))],
    employeeIds: ['employee_ids', optional(nullable(array(string())))],
    status: ['status', optional(string())],
    start: ['start', optional(lazy(() => timeRangeSchema))],
    end: ['end', optional(lazy(() => timeRangeSchema))],
    workday: ['workday', optional(lazy(() => shiftWorkdaySchema))],
    teamMemberIds: ['team_member_ids', optional(nullable(array(string())))],
});
//# sourceMappingURL=shiftFilter.js.map