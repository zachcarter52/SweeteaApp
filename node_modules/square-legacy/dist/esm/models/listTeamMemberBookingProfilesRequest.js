import { boolean, nullable, number, object, optional, string, } from '../schema';
export const listTeamMemberBookingProfilesRequestSchema = object({
    bookableOnly: ['bookable_only', optional(nullable(boolean()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=listTeamMemberBookingProfilesRequest.js.map