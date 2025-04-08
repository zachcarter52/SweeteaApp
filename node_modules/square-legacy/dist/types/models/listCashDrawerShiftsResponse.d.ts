import { Schema } from '../schema';
import { CashDrawerShiftSummary } from './cashDrawerShiftSummary';
import { Error } from './error';
export interface ListCashDrawerShiftsResponse {
    /**
     * Opaque cursor for fetching the next page of results. Cursor is not
     * present in the last page of results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * A collection of CashDrawerShiftSummary objects for shifts that match
     * the query.
     */
    cashDrawerShifts?: CashDrawerShiftSummary[];
}
export declare const listCashDrawerShiftsResponseSchema: Schema<ListCashDrawerShiftsResponse>;
