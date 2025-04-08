import { lazy, number, object, optional, string } from '../schema';
import { searchTeamMembersQuerySchema, } from './searchTeamMembersQuery';
export const searchTeamMembersRequestSchema = object({
    query: ['query', optional(lazy(() => searchTeamMembersQuerySchema))],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchTeamMembersRequest.js.map