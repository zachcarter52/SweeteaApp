import { lazy, nullable, number, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const jobAssignmentSchema = object({
    jobTitle: ['job_title', optional(nullable(string()))],
    payType: ['pay_type', string()],
    hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
    annualRate: ['annual_rate', optional(lazy(() => moneySchema))],
    weeklyHours: ['weekly_hours', optional(nullable(number()))],
    jobId: ['job_id', optional(nullable(string()))],
});
//# sourceMappingURL=jobAssignment.js.map