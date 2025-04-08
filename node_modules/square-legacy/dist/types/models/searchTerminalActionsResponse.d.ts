import { Schema } from '../schema';
import { Error } from './error';
import { TerminalAction } from './terminalAction';
export interface SearchTerminalActionsResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The requested search result of `TerminalAction`s. */
    action?: TerminalAction[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more
     * information.
     */
    cursor?: string;
}
export declare const searchTerminalActionsResponseSchema: Schema<SearchTerminalActionsResponse>;
