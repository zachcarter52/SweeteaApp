import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { locationBookingProfileSchema, } from './locationBookingProfile';
export const retrieveLocationBookingProfileResponseSchema = object({
    locationBookingProfile: [
        'location_booking_profile',
        optional(lazy(() => locationBookingProfileSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveLocationBookingProfileResponse.js.map