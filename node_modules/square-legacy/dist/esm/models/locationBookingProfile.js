import { boolean, nullable, object, optional, string } from '../schema';
export const locationBookingProfileSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    bookingSiteUrl: ['booking_site_url', optional(nullable(string()))],
    onlineBookingEnabled: [
        'online_booking_enabled',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=locationBookingProfile.js.map