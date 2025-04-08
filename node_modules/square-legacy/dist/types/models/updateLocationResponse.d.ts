import { Schema } from '../schema';
import { Error } from './error';
import { Location } from './location';
/** The response object returned by the [UpdateLocation]($e/Locations/UpdateLocation) endpoint. */
export interface UpdateLocationResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). */
    location?: Location;
}
export declare const updateLocationResponseSchema: Schema<UpdateLocationResponse>;
