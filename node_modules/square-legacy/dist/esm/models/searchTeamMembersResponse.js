import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { teamMemberSchema } from './teamMember';
export const searchTeamMembersResponseSchema = object({
    teamMembers: [
        'team_members',
        optional(array(lazy(() => teamMemberSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=searchTeamMembersResponse.js.map