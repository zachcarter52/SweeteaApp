import { Schema } from '../schema';
import { Error } from './error';
/** Represents a response for an individual upsert request in a [BulkDeleteBookingCustomAttributes]($e/BookingCustomAttributes/BulkDeleteBookingCustomAttributes) operation. */
export interface BookingCustomAttributeDeleteResponse {
    /** The ID of the [booking](entity:Booking) associated with the custom attribute. */
    bookingId?: string;
    /** Any errors that occurred while processing the individual request. */
    errors?: Error[];
}
export declare const bookingCustomAttributeDeleteResponseSchema: Schema<BookingCustomAttributeDeleteResponse>;
