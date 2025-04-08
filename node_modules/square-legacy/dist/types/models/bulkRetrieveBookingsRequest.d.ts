import { Schema } from '../schema';
/** Request payload for bulk retrieval of bookings. */
export interface BulkRetrieveBookingsRequest {
    /** A non-empty list of [Booking](entity:Booking) IDs specifying bookings to retrieve. */
    bookingIds: string[];
}
export declare const bulkRetrieveBookingsRequestSchema: Schema<BulkRetrieveBookingsRequest>;
