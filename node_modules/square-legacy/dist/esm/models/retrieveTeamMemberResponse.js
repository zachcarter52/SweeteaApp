import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { teamMemberSchema } from './teamMember';
export const retrieveTeamMemberResponseSchema = object({
    teamMember: ['team_member', optional(lazy(() => teamMemberSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveTeamMemberResponse.js.map