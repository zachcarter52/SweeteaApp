import { Schema } from '../schema';
export interface TerminalRefundQuerySort {
    /**
     * The order in which results are listed.
     * - `ASC` - Oldest to newest.
     * - `DESC` - Newest to oldest (default).
     */
    sortOrder?: string | null;
}
export declare const terminalRefundQuerySortSchema: Schema<TerminalRefundQuerySort>;
