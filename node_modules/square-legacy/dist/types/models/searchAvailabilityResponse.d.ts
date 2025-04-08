import { Schema } from '../schema';
import { Availability } from './availability';
import { Error } from './error';
export interface SearchAvailabilityResponse {
    /** List of appointment slots available for booking. */
    availabilities?: Availability[];
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const searchAvailabilityResponseSchema: Schema<SearchAvailabilityResponse>;
