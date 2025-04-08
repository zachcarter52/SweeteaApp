import { array, lazy, object, optional } from '../schema';
import { businessBookingProfileSchema, } from './businessBookingProfile';
import { errorSchema } from './error';
export const retrieveBusinessBookingProfileResponseSchema = object({
    businessBookingProfile: [
        'business_booking_profile',
        optional(lazy(() => businessBookingProfileSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveBusinessBookingProfileResponse.js.map