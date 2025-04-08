import { Schema } from '../schema';
import { Error } from './error';
/**
 * The response to a request to delete a `Shift`. The response might contain a set of
 * `Error` objects if the request resulted in errors.
 */
export interface DeleteShiftResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteShiftResponseSchema: Schema<DeleteShiftResponse>;
