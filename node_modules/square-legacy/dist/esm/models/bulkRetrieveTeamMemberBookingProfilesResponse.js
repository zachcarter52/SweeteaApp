import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { retrieveTeamMemberBookingProfileResponseSchema, } from './retrieveTeamMemberBookingProfileResponse';
export const bulkRetrieveTeamMemberBookingProfilesResponseSchema = object({
    teamMemberBookingProfiles: [
        'team_member_booking_profiles',
        optional(dict(lazy(() => retrieveTeamMemberBookingProfileResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkRetrieveTeamMemberBookingProfilesResponse.js.map