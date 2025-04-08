import { Schema } from '../schema';
export interface TerminalActionQuerySort {
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
}
export declare const terminalActionQuerySortSchema: Schema<TerminalActionQuerySort>;
