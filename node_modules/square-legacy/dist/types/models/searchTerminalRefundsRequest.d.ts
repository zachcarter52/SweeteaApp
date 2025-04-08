import { Schema } from '../schema';
import { TerminalRefundQuery } from './terminalRefundQuery';
export interface SearchTerminalRefundsRequest {
    query?: TerminalRefundQuery;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this cursor to retrieve the next set of results for the original query.
     */
    cursor?: string;
    /** Limits the number of results returned for a single request. */
    limit?: number;
}
export declare const searchTerminalRefundsRequestSchema: Schema<SearchTerminalRefundsRequest>;
