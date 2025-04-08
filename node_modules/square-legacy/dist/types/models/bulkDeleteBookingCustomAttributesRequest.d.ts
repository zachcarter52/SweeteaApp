import { Schema } from '../schema';
import { BookingCustomAttributeDeleteRequest } from './bookingCustomAttributeDeleteRequest';
/** Represents a [BulkDeleteBookingCustomAttributes]($e/BookingCustomAttributes/BulkDeleteBookingCustomAttributes) request. */
export interface BulkDeleteBookingCustomAttributesRequest {
    /**
     * A map containing 1 to 25 individual Delete requests. For each request, provide an
     * arbitrary ID that is unique for this `BulkDeleteBookingCustomAttributes` request and the
     * information needed to delete a custom attribute.
     */
    values: Record<string, BookingCustomAttributeDeleteRequest>;
}
export declare const bulkDeleteBookingCustomAttributesRequestSchema: Schema<BulkDeleteBookingCustomAttributesRequest>;
