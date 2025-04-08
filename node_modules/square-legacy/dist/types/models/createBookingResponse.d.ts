import { Schema } from '../schema';
import { Booking } from './booking';
import { Error } from './error';
export interface CreateBookingResponse {
    /**
     * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
     * at a given location to a requesting customer in one or more appointment segments.
     */
    booking?: Booking;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const createBookingResponseSchema: Schema<CreateBookingResponse>;
