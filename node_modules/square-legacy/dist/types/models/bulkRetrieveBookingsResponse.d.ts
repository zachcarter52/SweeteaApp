import { Schema } from '../schema';
import { Error } from './error';
import { RetrieveBookingResponse } from './retrieveBookingResponse';
/** Response payload for bulk retrieval of bookings. */
export interface BulkRetrieveBookingsResponse {
    /** Requested bookings returned as a map containing `booking_id` as the key and `RetrieveBookingResponse` as the value. */
    bookings?: Record<string, RetrieveBookingResponse>;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkRetrieveBookingsResponseSchema: Schema<BulkRetrieveBookingsResponse>;
