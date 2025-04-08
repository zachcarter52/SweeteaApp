import { Schema } from '../schema';
import { BreakType } from './breakType';
import { Error } from './error';
/**
 * The response to a request to get a `BreakType`. The response contains
 * the requested `BreakType` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetBreakTypeResponse {
    /**
     * A defined break template that sets an expectation for possible `Break`
     * instances on a `Shift`.
     */
    breakType?: BreakType;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const getBreakTypeResponseSchema: Schema<GetBreakTypeResponse>;
