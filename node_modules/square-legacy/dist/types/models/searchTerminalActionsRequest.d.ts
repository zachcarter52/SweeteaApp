import { Schema } from '../schema';
import { TerminalActionQuery } from './terminalActionQuery';
export interface SearchTerminalActionsRequest {
    query?: TerminalActionQuery;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more
     * information.
     */
    cursor?: string;
    /** Limit the number of results returned for a single request. */
    limit?: number;
}
export declare const searchTerminalActionsRequestSchema: Schema<SearchTerminalActionsRequest>;
