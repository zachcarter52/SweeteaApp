import { Schema } from '../schema';
import { CashDrawerShiftEvent } from './cashDrawerShiftEvent';
import { Error } from './error';
export interface ListCashDrawerShiftEventsResponse {
    /**
     * Opaque cursor for fetching the next page. Cursor is not present in
     * the last page of results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * All of the events (payments, refunds, etc.) for a cash drawer during
     * the shift.
     */
    cashDrawerShiftEvents?: CashDrawerShiftEvent[];
}
export declare const listCashDrawerShiftEventsResponseSchema: Schema<ListCashDrawerShiftEventsResponse>;
