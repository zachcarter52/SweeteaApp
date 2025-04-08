import { array, boolean, nullable, object, optional, string, } from '../schema';
export const searchTeamMembersFilterSchema = object({
    locationIds: ['location_ids', optional(nullable(array(string())))],
    status: ['status', optional(string())],
    isOwner: ['is_owner', optional(nullable(boolean()))],
});
//# sourceMappingURL=searchTeamMembersFilter.js.map