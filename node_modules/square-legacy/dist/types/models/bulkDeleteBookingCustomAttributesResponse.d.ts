import { Schema } from '../schema';
import { BookingCustomAttributeDeleteResponse } from './bookingCustomAttributeDeleteResponse';
import { Error } from './error';
/**
 * Represents a [BulkDeleteBookingCustomAttributes]($e/BookingCustomAttributes/BulkDeleteBookingCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual delete request.
 */
export interface BulkDeleteBookingCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual delete requests. Each response has the
     * same ID as the corresponding request and contains `booking_id` and  `errors` field.
     */
    values?: Record<string, BookingCustomAttributeDeleteResponse>;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkDeleteBookingCustomAttributesResponseSchema: Schema<BulkDeleteBookingCustomAttributesResponse>;
