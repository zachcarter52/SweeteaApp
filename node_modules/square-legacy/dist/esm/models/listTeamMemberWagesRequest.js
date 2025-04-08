import { nullable, number, object, optional, string } from '../schema';
export const listTeamMemberWagesRequestSchema = object({
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listTeamMemberWagesRequest.js.map