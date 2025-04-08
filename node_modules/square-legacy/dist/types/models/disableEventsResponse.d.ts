import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [DisableEvents]($e/Events/DisableEvents) endpoint.
 * Note: if there are errors processing the request, the events field will not be
 * present.
 */
export interface DisableEventsResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
}
export declare const disableEventsResponseSchema: Schema<DisableEventsResponse>;
