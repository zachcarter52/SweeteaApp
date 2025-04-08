import { Schema } from '../schema';
import { SegmentFilter } from './segmentFilter';
import { TimeRange } from './timeRange';
/** A query filter to search for buyer-accessible availabilities by. */
export interface SearchAvailabilityFilter {
    /**
     * Represents a generic time range. The start and end values are
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    startAtRange: TimeRange;
    /**
     * The query expression to search for buyer-accessible availabilities with their location IDs matching the specified location ID.
     * This query expression cannot be set if `booking_id` is set.
     */
    locationId?: string | null;
    /**
     * The query expression to search for buyer-accessible availabilities matching the specified list of segment filters.
     * If the size of the `segment_filters` list is `n`, the search returns availabilities with `n` segments per availability.
     * This query expression cannot be set if `booking_id` is set.
     */
    segmentFilters?: SegmentFilter[] | null;
    /**
     * The query expression to search for buyer-accessible availabilities for an existing booking by matching the specified `booking_id` value.
     * This is commonly used to reschedule an appointment.
     * If this expression is set, the `location_id` and `segment_filters` expressions cannot be set.
     */
    bookingId?: string | null;
}
export declare const searchAvailabilityFilterSchema: Schema<SearchAvailabilityFilter>;
