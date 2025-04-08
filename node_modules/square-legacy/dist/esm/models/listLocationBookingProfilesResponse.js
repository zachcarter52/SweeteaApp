import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { locationBookingProfileSchema, } from './locationBookingProfile';
export const listLocationBookingProfilesResponseSchema = object({
    locationBookingProfiles: [
        'location_booking_profiles',
        optional(array(lazy(() => locationBookingProfileSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listLocationBookingProfilesResponse.js.map