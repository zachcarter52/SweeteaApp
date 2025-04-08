import { Schema } from '../schema';
export interface ListCashDrawerShiftsRequest {
    /** The ID of the location to query for a list of cash drawer shifts. */
    locationId: string;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
    /** The inclusive start time of the query on opened_at, in ISO 8601 format. */
    beginTime?: string | null;
    /** The exclusive end date of the query on opened_at, in ISO 8601 format. */
    endTime?: string | null;
    /**
     * Number of cash drawer shift events in a page of results (200 by
     * default, 1000 max).
     */
    limit?: number | null;
    /** Opaque cursor for fetching the next page of results. */
    cursor?: string | null;
}
export declare const listCashDrawerShiftsRequestSchema: Schema<ListCashDrawerShiftsRequest>;
