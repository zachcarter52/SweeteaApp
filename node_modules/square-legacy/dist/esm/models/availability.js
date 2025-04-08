import { array, lazy, nullable, object, optional, string, } from '../schema';
import { appointmentSegmentSchema, } from './appointmentSegment';
export const availabilitySchema = object({
    startAt: ['start_at', optional(nullable(string()))],
    locationId: ['location_id', optional(string())],
    appointmentSegments: [
        'appointment_segments',
        optional(nullable(array(lazy(() => appointmentSegmentSchema)))),
    ],
});
//# sourceMappingURL=availability.js.map