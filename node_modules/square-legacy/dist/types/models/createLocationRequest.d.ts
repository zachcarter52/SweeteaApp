import { Schema } from '../schema';
import { Location } from './location';
/** The request object for the [CreateLocation]($e/Locations/CreateLocation) endpoint. */
export interface CreateLocationRequest {
    /** Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). */
    location?: Location;
}
export declare const createLocationRequestSchema: Schema<CreateLocationRequest>;
