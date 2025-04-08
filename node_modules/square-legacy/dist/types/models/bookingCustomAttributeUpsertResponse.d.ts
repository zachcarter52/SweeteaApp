import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
import { Error } from './error';
/** Represents a response for an individual upsert request in a [BulkUpsertBookingCustomAttributes]($e/BookingCustomAttributes/BulkUpsertBookingCustomAttributes) operation. */
export interface BookingCustomAttributeUpsertResponse {
    /** The ID of the [booking](entity:Booking) associated with the custom attribute. */
    bookingId?: string;
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute?: CustomAttribute;
    /** Any errors that occurred while processing the individual request. */
    errors?: Error[];
}
export declare const bookingCustomAttributeUpsertResponseSchema: Schema<BookingCustomAttributeUpsertResponse>;
