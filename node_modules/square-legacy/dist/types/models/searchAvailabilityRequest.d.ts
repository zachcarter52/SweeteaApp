import { Schema } from '../schema';
import { SearchAvailabilityQuery } from './searchAvailabilityQuery';
export interface SearchAvailabilityRequest {
    /** The query used to search for buyer-accessible availabilities of bookings. */
    query: SearchAvailabilityQuery;
}
export declare const searchAvailabilityRequestSchema: Schema<SearchAvailabilityRequest>;
