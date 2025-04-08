import { ApiResponse, RequestOptions } from '../core';
import { DisableEventsResponse } from '../models/disableEventsResponse';
import { EnableEventsResponse } from '../models/enableEventsResponse';
import { ListEventTypesResponse } from '../models/listEventTypesResponse';
import { SearchEventsRequest } from '../models/searchEventsRequest';
import { SearchEventsResponse } from '../models/searchEventsResponse';
import { BaseApi } from './baseApi';
export declare class EventsApi extends BaseApi {
    /**
     * Search for Square API events that occur within a 28-day timeframe.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchEvents(body: SearchEventsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchEventsResponse>>;
    /**
     * Disables events to prevent them from being searchable.
     * All events are disabled by default. You must enable events to make them searchable.
     * Disabling events for a specific time period prevents them from being searchable, even if you re-
     * enable them later.
     *
     * @return Response from the API call
     */
    disableEvents(requestOptions?: RequestOptions): Promise<ApiResponse<DisableEventsResponse>>;
    /**
     * Enables events to make them searchable. Only events that occur while in the enabled state are
     * searchable.
     *
     * @return Response from the API call
     */
    enableEvents(requestOptions?: RequestOptions): Promise<ApiResponse<EnableEventsResponse>>;
    /**
     * Lists all event types that you can subscribe to as webhooks or query using the Events API.
     *
     * @param apiVersion  The API version for which to list event types. Setting this field overrides the
     *                              default version used by the application.
     * @return Response from the API call
     */
    listEventTypes(apiVersion?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListEventTypesResponse>>;
}
