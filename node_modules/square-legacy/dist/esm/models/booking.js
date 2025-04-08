import { array, boolean, lazy, nullable, number, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { appointmentSegmentSchema, } from './appointmentSegment';
import { bookingCreatorDetailsSchema, } from './bookingCreatorDetails';
export const bookingSchema = object({
    id: ['id', optional(string())],
    version: ['version', optional(number())],
    status: ['status', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    startAt: ['start_at', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
    customerNote: ['customer_note', optional(nullable(string()))],
    sellerNote: ['seller_note', optional(nullable(string()))],
    appointmentSegments: [
        'appointment_segments',
        optional(nullable(array(lazy(() => appointmentSegmentSchema)))),
    ],
    transitionTimeMinutes: ['transition_time_minutes', optional(number())],
    allDay: ['all_day', optional(boolean())],
    locationType: ['location_type', optional(string())],
    creatorDetails: [
        'creator_details',
        optional(lazy(() => bookingCreatorDetailsSchema)),
    ],
    source: ['source', optional(string())],
    address: ['address', optional(lazy(() => addressSchema))],
});
//# sourceMappingURL=booking.js.map