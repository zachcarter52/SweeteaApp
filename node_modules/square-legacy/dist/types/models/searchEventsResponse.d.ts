import { Schema } from '../schema';
import { Error } from './error';
import { Event } from './event';
import { EventMetadata } from './eventMetadata';
/**
 * Defines the fields that are included in the response body of
 * a request to the [SearchEvents]($e/Events/SearchEvents) endpoint.
 * Note: if there are errors processing the request, the events field will not be
 * present.
 */
export interface SearchEventsResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The list of [Event](entity:Event)s returned by the search. */
    events?: Event[];
    /** Contains the metadata of an event. For more information, see [Event](entity:Event). */
    metadata?: EventMetadata[];
    /**
     * When a response is truncated, it includes a cursor that you can use in a subsequent request to fetch the next set of events. If empty, this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const searchEventsResponseSchema: Schema<SearchEventsResponse>;
