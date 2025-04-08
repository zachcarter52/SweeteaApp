import { Schema } from '../schema';
import { TerminalCheckoutQuery } from './terminalCheckoutQuery';
export interface SearchTerminalCheckoutsRequest {
    query?: TerminalCheckoutQuery;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this cursor to retrieve the next set of results for the original query.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
     */
    cursor?: string;
    /** Limits the number of results returned for a single request. */
    limit?: number;
}
export declare const searchTerminalCheckoutsRequestSchema: Schema<SearchTerminalCheckoutsRequest>;
