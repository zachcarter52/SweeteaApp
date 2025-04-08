import { Schema } from '../schema';
import { ShiftFilter } from './shiftFilter';
import { ShiftSort } from './shiftSort';
/** The parameters of a `Shift` search query, which includes filter and sort options. */
export interface ShiftQuery {
    /**
     * Defines a filter used in a search for `Shift` records. `AND` logic is
     * used by Square's servers to apply each filter property specified.
     */
    filter?: ShiftFilter;
    /** Sets the sort order of search results. */
    sort?: ShiftSort;
}
export declare const shiftQuerySchema: Schema<ShiftQuery>;
