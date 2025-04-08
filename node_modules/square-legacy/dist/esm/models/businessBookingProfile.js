import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { businessAppointmentSettingsSchema, } from './businessAppointmentSettings';
export const businessBookingProfileSchema = object({
    sellerId: ['seller_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    bookingEnabled: ['booking_enabled', optional(nullable(boolean()))],
    customerTimezoneChoice: ['customer_timezone_choice', optional(string())],
    bookingPolicy: ['booking_policy', optional(string())],
    allowUserCancel: ['allow_user_cancel', optional(nullable(boolean()))],
    businessAppointmentSettings: [
        'business_appointment_settings',
        optional(lazy(() => businessAppointmentSettingsSchema)),
    ],
    supportSellerLevelWrites: [
        'support_seller_level_writes',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=businessBookingProfile.js.map