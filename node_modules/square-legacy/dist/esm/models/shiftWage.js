import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const shiftWageSchema = object({
    title: ['title', optional(nullable(string()))],
    hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
    jobId: ['job_id', optional(string())],
    tipEligible: ['tip_eligible', optional(nullable(boolean()))],
});
//# sourceMappingURL=shiftWage.js.map