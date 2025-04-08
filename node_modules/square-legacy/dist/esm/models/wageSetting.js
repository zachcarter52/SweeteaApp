import { array, boolean, lazy, nullable, number, object, optional, string, } from '../schema';
import { jobAssignmentSchema } from './jobAssignment';
export const wageSettingSchema = object({
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    jobAssignments: [
        'job_assignments',
        optional(nullable(array(lazy(() => jobAssignmentSchema)))),
    ],
    isOvertimeExempt: ['is_overtime_exempt', optional(nullable(boolean()))],
    version: ['version', optional(number())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=wageSetting.js.map