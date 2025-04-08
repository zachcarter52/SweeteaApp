import { Schema } from '../schema';
import { SearchAvailabilityFilter } from './searchAvailabilityFilter';
/** The query used to search for buyer-accessible availabilities of bookings. */
export interface SearchAvailabilityQuery {
    /** A query filter to search for buyer-accessible availabilities by. */
    filter: SearchAvailabilityFilter;
}
export declare const searchAvailabilityQuerySchema: Schema<SearchAvailabilityQuery>;
