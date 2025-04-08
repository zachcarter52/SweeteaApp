import { Schema } from '../schema';
import { Error } from './error';
import { RetrieveTeamMemberBookingProfileResponse } from './retrieveTeamMemberBookingProfileResponse';
/** Response payload for the [BulkRetrieveTeamMemberBookingProfiles]($e/Bookings/BulkRetrieveTeamMemberBookingProfiles) endpoint. */
export interface BulkRetrieveTeamMemberBookingProfilesResponse {
    /** The returned team members' booking profiles, as a map with `team_member_id` as the key and [TeamMemberBookingProfile](entity:TeamMemberBookingProfile) the value. */
    teamMemberBookingProfiles?: Record<string, RetrieveTeamMemberBookingProfileResponse>;
    /** Errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkRetrieveTeamMemberBookingProfilesResponseSchema: Schema<BulkRetrieveTeamMemberBookingProfilesResponse>;
