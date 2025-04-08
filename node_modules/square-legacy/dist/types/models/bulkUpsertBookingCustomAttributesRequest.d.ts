import { Schema } from '../schema';
import { BookingCustomAttributeUpsertRequest } from './bookingCustomAttributeUpsertRequest';
/** Represents a [BulkUpsertBookingCustomAttributes]($e/BookingCustomAttributes/BulkUpsertBookingCustomAttributes) request. */
export interface BulkUpsertBookingCustomAttributesRequest {
    /**
     * A map containing 1 to 25 individual upsert requests. For each request, provide an
     * arbitrary ID that is unique for this `BulkUpsertBookingCustomAttributes` request and the
     * information needed to create or update a custom attribute.
     */
    values: Record<string, BookingCustomAttributeUpsertRequest>;
}
export declare const bulkUpsertBookingCustomAttributesRequestSchema: Schema<BulkUpsertBookingCustomAttributesRequest>;
