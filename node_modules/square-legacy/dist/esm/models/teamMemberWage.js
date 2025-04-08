import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const teamMemberWageSchema = object({
    id: ['id', optional(string())],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    title: ['title', optional(nullable(string()))],
    hourlyRate: ['hourly_rate', optional(lazy(() => moneySchema))],
    jobId: ['job_id', optional(nullable(string()))],
    tipEligible: ['tip_eligible', optional(nullable(boolean()))],
});
//# sourceMappingURL=teamMemberWage.js.map