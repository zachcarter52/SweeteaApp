import { Schema } from '../schema';
import { Error } from './error';
import { TeamMemberBookingProfile } from './teamMemberBookingProfile';
export interface RetrieveTeamMemberBookingProfileResponse {
    /** The booking profile of a seller's team member, including the team member's ID, display name, description and whether the team member can be booked as a service provider. */
    teamMemberBookingProfile?: TeamMemberBookingProfile;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveTeamMemberBookingProfileResponseSchema: Schema<RetrieveTeamMemberBookingProfileResponse>;
