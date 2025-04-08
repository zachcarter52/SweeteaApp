import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { teamMemberBookingProfileSchema, } from './teamMemberBookingProfile';
export const listTeamMemberBookingProfilesResponseSchema = object({
    teamMemberBookingProfiles: [
        'team_member_booking_profiles',
        optional(array(lazy(() => teamMemberBookingProfileSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listTeamMemberBookingProfilesResponse.js.map