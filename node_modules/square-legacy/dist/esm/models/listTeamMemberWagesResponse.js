import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { teamMemberWageSchema } from './teamMemberWage';
export const listTeamMemberWagesResponseSchema = object({
    teamMemberWages: [
        'team_member_wages',
        optional(array(lazy(() => teamMemberWageSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listTeamMemberWagesResponse.js.map