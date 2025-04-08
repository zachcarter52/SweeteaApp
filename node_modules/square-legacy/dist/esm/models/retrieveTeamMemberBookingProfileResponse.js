import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { teamMemberBookingProfileSchema, } from './teamMemberBookingProfile';
export const retrieveTeamMemberBookingProfileResponseSchema = object({
    teamMemberBookingProfile: [
        'team_member_booking_profile',
        optional(lazy(() => teamMemberBookingProfileSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveTeamMemberBookingProfileResponse.js.map