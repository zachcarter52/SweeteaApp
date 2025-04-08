import { Schema } from '../schema';
import { Error } from './error';
import { LocationBookingProfile } from './locationBookingProfile';
export interface ListLocationBookingProfilesResponse {
    /** The list of a seller's location booking profiles. */
    locationBookingProfiles?: LocationBookingProfile[];
    /** The pagination cursor to be used in the subsequent request to get the next page of the results. Stop retrieving the next page of the results when the cursor is not set. */
    cursor?: string;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const listLocationBookingProfilesResponseSchema: Schema<ListLocationBookingProfilesResponse>;
