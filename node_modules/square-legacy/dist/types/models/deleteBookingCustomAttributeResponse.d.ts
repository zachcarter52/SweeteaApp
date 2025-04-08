import { Schema } from '../schema';
import { Error } from './error';
/**
 * Represents a [DeleteBookingCustomAttribute]($e/BookingCustomAttributes/DeleteBookingCustomAttribute) response.
 * Either an empty object `{}` (for a successful deletion) or `errors` is present in the response.
 */
export interface DeleteBookingCustomAttributeResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteBookingCustomAttributeResponseSchema: Schema<DeleteBookingCustomAttributeResponse>;
