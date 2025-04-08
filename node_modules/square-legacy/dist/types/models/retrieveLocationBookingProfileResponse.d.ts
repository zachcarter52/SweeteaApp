import { Schema } from '../schema';
import { Error } from './error';
import { LocationBookingProfile } from './locationBookingProfile';
export interface RetrieveLocationBookingProfileResponse {
    /** The booking profile of a seller's location, including the location's ID and whether the location is enabled for online booking. */
    locationBookingProfile?: LocationBookingProfile;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveLocationBookingProfileResponseSchema: Schema<RetrieveLocationBookingProfileResponse>;
