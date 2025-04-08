import { Schema } from '../schema';
import { Error } from './error';
import { WorkweekConfig } from './workweekConfig';
/**
 * The response to a request to update a `WorkweekConfig` object. The response contains
 * the updated `WorkweekConfig` object and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface UpdateWorkweekConfigResponse {
    /**
     * Sets the day of the week and hour of the day that a business starts a
     * workweek. This is used to calculate overtime pay.
     */
    workweekConfig?: WorkweekConfig;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const updateWorkweekConfigResponseSchema: Schema<UpdateWorkweekConfigResponse>;
