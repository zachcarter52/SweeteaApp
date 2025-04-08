import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { updateTeamMemberResponseSchema, } from './updateTeamMemberResponse';
export const bulkUpdateTeamMembersResponseSchema = object({
    teamMembers: [
        'team_members',
        optional(dict(lazy(() => updateTeamMemberResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkUpdateTeamMembersResponse.js.map