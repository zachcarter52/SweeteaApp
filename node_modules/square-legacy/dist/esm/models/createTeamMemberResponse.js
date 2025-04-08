import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { teamMemberSchema } from './teamMember';
export const createTeamMemberResponseSchema = object({
    teamMember: ['team_member', optional(lazy(() => teamMemberSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createTeamMemberResponse.js.map