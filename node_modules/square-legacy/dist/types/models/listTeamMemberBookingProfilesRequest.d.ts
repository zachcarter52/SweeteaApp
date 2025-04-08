import { Schema } from '../schema';
export interface ListTeamMemberBookingProfilesRequest {
    /** Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`). */
    bookableOnly?: boolean | null;
    /** The maximum number of results to return in a paged response. */
    limit?: number | null;
    /** The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. */
    cursor?: string | null;
    /** Indicates whether to include only team members enabled at the given location in the returned result. */
    locationId?: string | null;
}
export declare const listTeamMemberBookingProfilesRequestSchema: Schema<ListTeamMemberBookingProfilesRequest>;
