import { Schema } from '../schema';
import { Error } from './error';
import { Location } from './location';
/**
 * Defines the fields that are included in the response body of a request
 * to the [ListLocations]($e/Locations/ListLocations) endpoint.
 * Either `errors` or `locations` is present in a given response (never both).
 */
export interface ListLocationsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The business locations. */
    locations?: Location[];
}
export declare const listLocationsResponseSchema: Schema<ListLocationsResponse>;
