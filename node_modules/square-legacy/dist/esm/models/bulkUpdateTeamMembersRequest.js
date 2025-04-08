import { dict, lazy, object } from '../schema';
import { updateTeamMemberRequestSchema, } from './updateTeamMemberRequest';
export const bulkUpdateTeamMembersRequestSchema = object({
    teamMembers: [
        'team_members',
        dict(lazy(() => updateTeamMemberRequestSchema)),
    ],
});
//# sourceMappingURL=bulkUpdateTeamMembersRequest.js.map