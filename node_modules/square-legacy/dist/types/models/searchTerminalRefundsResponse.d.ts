import { Schema } from '../schema';
import { Error } from './error';
import { TerminalRefund } from './terminalRefund';
export interface SearchTerminalRefundsResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** The requested search result of `TerminalRefund` objects. */
    refunds?: TerminalRefund[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
     */
    cursor?: string;
}
export declare const searchTerminalRefundsResponseSchema: Schema<SearchTerminalRefundsResponse>;
