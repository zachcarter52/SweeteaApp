import { ApiResponse, RequestOptions } from '../core';
import { CreateLocationRequest } from '../models/createLocationRequest';
import { CreateLocationResponse } from '../models/createLocationResponse';
import { ListLocationsResponse } from '../models/listLocationsResponse';
import { RetrieveLocationResponse } from '../models/retrieveLocationResponse';
import { UpdateLocationRequest } from '../models/updateLocationRequest';
import { UpdateLocationResponse } from '../models/updateLocationResponse';
import { BaseApi } from './baseApi';
export declare class LocationsApi extends BaseApi {
    /**
     * Provides details about all of the seller's [locations](https://developer.squareup.com/docs/locations-
     * api),
     * including those with an inactive status. Locations are listed alphabetically by `name`.
     *
     * @return Response from the API call
     */
    listLocations(requestOptions?: RequestOptions): Promise<ApiResponse<ListLocationsResponse>>;
    /**
     * Creates a [location](https://developer.squareup.com/docs/locations-api).
     * Creating new locations allows for separate configuration of receipt layouts, item prices,
     * and sales reports. Developers can use locations to separate sales activity through applications
     * that integrate with Square from sales activity elsewhere in a seller's account.
     * Locations created programmatically with the Locations API last forever and
     * are visible to the seller for their own management. Therefore, ensure that
     * each location has a sensible and unique name.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    createLocation(body: CreateLocationRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateLocationResponse>>;
    /**
     * Retrieves details of a single location. Specify "main"
     * as the location ID to retrieve details of the [main location](https://developer.squareup.
     * com/docs/locations-api#about-the-main-location).
     *
     * @param locationId  The ID of the location to retrieve. Specify the string "main" to return the main
     *                              location.
     * @return Response from the API call
     */
    retrieveLocation(locationId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveLocationResponse>>;
    /**
     * Updates a [location](https://developer.squareup.com/docs/locations-api).
     *
     * @param locationId   The ID of the location to update.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateLocation(locationId: string, body: UpdateLocationRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateLocationResponse>>;
}
