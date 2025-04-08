import { dict, lazy, object } from '../schema';
import { createTeamMemberRequestSchema, } from './createTeamMemberRequest';
export const bulkCreateTeamMembersRequestSchema = object({
    teamMembers: [
        'team_members',
        dict(lazy(() => createTeamMemberRequestSchema)),
    ],
});
//# sourceMappingURL=bulkCreateTeamMembersRequest.js.map