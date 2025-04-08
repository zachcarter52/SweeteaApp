import { array, lazy, nullable, object, optional, string, } from '../schema';
import { segmentFilterSchema } from './segmentFilter';
import { timeRangeSchema } from './timeRange';
export const searchAvailabilityFilterSchema = object({
    startAtRange: ['start_at_range', lazy(() => timeRangeSchema)],
    locationId: ['location_id', optional(nullable(string()))],
    segmentFilters: [
        'segment_filters',
        optional(nullable(array(lazy(() => segmentFilterSchema)))),
    ],
    bookingId: ['booking_id', optional(nullable(string()))],
});
//# sourceMappingURL=searchAvailabilityFilter.js.map