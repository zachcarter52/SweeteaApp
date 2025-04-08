import { lazy, object, optional } from '../schema';
import { searchTeamMembersFilterSchema, } from './searchTeamMembersFilter';
export const searchTeamMembersQuerySchema = object({ filter: ['filter', optional(lazy(() => searchTeamMembersFilterSchema))] });
//# sourceMappingURL=searchTeamMembersQuery.js.map