import { Schema } from '../schema';
/** Sets the sort order of search results. */
export interface ShiftSort {
    /** Enumerates the `Shift` fields to sort on. */
    field?: string;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    order?: string;
}
export declare const shiftSortSchema: Schema<ShiftSort>;
