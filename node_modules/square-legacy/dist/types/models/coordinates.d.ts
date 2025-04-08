import { Schema } from '../schema';
/** Latitude and longitude coordinates. */
export interface Coordinates {
    /** The latitude of the coordinate expressed in degrees. */
    latitude?: number | null;
    /** The longitude of the coordinate expressed in degrees. */
    longitude?: number | null;
}
export declare const coordinatesSchema: Schema<Coordinates>;
