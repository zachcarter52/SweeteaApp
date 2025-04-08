import { Schema } from '../schema';
import { SearchEventsFilter } from './searchEventsFilter';
import { SearchEventsSort } from './searchEventsSort';
/** Contains query criteria for the search. */
export interface SearchEventsQuery {
    /** Criteria to filter events by. */
    filter?: SearchEventsFilter;
    /** Criteria to sort events by. */
    sort?: SearchEventsSort;
}
export declare const searchEventsQuerySchema: Schema<SearchEventsQuery>;
