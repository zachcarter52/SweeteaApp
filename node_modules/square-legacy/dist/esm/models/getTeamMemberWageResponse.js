import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { teamMemberWageSchema } from './teamMemberWage';
export const getTeamMemberWageResponseSchema = object({
    teamMemberWage: [
        'team_member_wage',
        optional(lazy(() => teamMemberWageSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=getTeamMemberWageResponse.js.map