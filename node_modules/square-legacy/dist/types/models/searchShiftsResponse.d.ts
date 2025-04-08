import { Schema } from '../schema';
import { Error } from './error';
import { Shift } from './shift';
/**
 * The response to a request for `Shift` objects. The response contains
 * the requested `Shift` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface SearchShiftsResponse {
    /** Shifts. */
    shifts?: Shift[];
    /** An opaque cursor for fetching the next page. */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const searchShiftsResponseSchema: Schema<SearchShiftsResponse>;
