import { Schema } from '../schema';
import { BusinessBookingProfile } from './businessBookingProfile';
import { Error } from './error';
export interface RetrieveBusinessBookingProfileResponse {
    /** A seller's business booking profile, including booking policy, appointment settings, etc. */
    businessBookingProfile?: BusinessBookingProfile;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveBusinessBookingProfileResponseSchema: Schema<RetrieveBusinessBookingProfileResponse>;
