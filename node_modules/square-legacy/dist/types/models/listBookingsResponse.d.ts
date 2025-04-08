import { Schema } from '../schema';
import { Booking } from './booking';
import { Error } from './error';
export interface ListBookingsResponse {
    /** The list of targeted bookings. */
    bookings?: Booking[];
    /** The pagination cursor to be used in the subsequent request to get the next page of the results. Stop retrieving the next page of the results when the cursor is not set. */
    cursor?: string;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const listBookingsResponseSchema: Schema<ListBookingsResponse>;
