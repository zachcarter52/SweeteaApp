import { Schema } from '../schema';
import { Error } from './error';
import { Location } from './location';
/** The response object returned by the [CreateLocation]($e/Locations/CreateLocation) endpoint. */
export interface CreateLocationResponse {
    /** Information about [errors](https://developer.squareup.com/docs/build-basics/handling-errors) encountered during the request. */
    errors?: Error[];
    /** Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). */
    location?: Location;
}
export declare const createLocationResponseSchema: Schema<CreateLocationResponse>;
