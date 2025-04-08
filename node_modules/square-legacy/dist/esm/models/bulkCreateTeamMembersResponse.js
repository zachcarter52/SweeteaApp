import { array, dict, lazy, object, optional } from '../schema';
import { createTeamMemberResponseSchema, } from './createTeamMemberResponse';
import { errorSchema } from './error';
export const bulkCreateTeamMembersResponseSchema = object({
    teamMembers: [
        'team_members',
        optional(dict(lazy(() => createTeamMemberResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkCreateTeamMembersResponse.js.map