import { Schema } from '../schema';
/** Request payload for the [BulkRetrieveTeamMemberBookingProfiles]($e/Bookings/BulkRetrieveTeamMemberBookingProfiles) endpoint. */
export interface BulkRetrieveTeamMemberBookingProfilesRequest {
    /** A non-empty list of IDs of team members whose booking profiles you want to retrieve. */
    teamMemberIds: string[];
}
export declare const bulkRetrieveTeamMemberBookingProfilesRequestSchema: Schema<BulkRetrieveTeamMemberBookingProfilesRequest>;
