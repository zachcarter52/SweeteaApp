import { Schema } from '../schema';
import { Error } from './error';
import { Location } from './location';
/**
 * Defines the fields that the [RetrieveLocation]($e/Locations/RetrieveLocation)
 * endpoint returns in a response.
 */
export interface RetrieveLocationResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). */
    location?: Location;
}
export declare const retrieveLocationResponseSchema: Schema<RetrieveLocationResponse>;
