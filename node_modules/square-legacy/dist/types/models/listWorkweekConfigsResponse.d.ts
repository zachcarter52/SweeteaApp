import { Schema } from '../schema';
import { Error } from './error';
import { WorkweekConfig } from './workweekConfig';
/**
 * The response to a request for a set of `WorkweekConfig` objects. The response contains
 * the requested `WorkweekConfig` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface ListWorkweekConfigsResponse {
    /** A page of `WorkweekConfig` results. */
    workweekConfigs?: WorkweekConfig[];
    /**
     * The value supplied in the subsequent request to fetch the next page of
     * `WorkweekConfig` results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listWorkweekConfigsResponseSchema: Schema<ListWorkweekConfigsResponse>;
