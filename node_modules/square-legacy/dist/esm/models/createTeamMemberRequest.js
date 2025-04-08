import { lazy, object, optional, string } from '../schema';
import { teamMemberSchema } from './teamMember';
export const createTeamMemberRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    teamMember: ['team_member', optional(lazy(() => teamMemberSchema))],
});
//# sourceMappingURL=createTeamMemberRequest.js.map