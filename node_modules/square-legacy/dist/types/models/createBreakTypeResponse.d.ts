import { Schema } from '../schema';
import { BreakType } from './breakType';
import { Error } from './error';
/**
 * The response to the request to create a `BreakType`. The response contains
 * the created `BreakType` object and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface CreateBreakTypeResponse {
    /**
     * A defined break template that sets an expectation for possible `Break`
     * instances on a `Shift`.
     */
    breakType?: BreakType;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const createBreakTypeResponseSchema: Schema<CreateBreakTypeResponse>;
