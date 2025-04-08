import { Schema } from '../schema';
import { Booking } from './booking';
export interface UpdateBookingRequest {
    /** A unique key to make this request an idempotent operation. */
    idempotencyKey?: string | null;
    /**
     * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
     * at a given location to a requesting customer in one or more appointment segments.
     */
    booking: Booking;
}
export declare const updateBookingRequestSchema: Schema<UpdateBookingRequest>;
