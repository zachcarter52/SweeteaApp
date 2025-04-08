import { lazy, object, optional } from '../schema';
import { teamMemberSchema } from './teamMember';
export const updateTeamMemberRequestSchema = object({ teamMember: ['team_member', optional(lazy(() => teamMemberSchema))] });
//# sourceMappingURL=updateTeamMemberRequest.js.map