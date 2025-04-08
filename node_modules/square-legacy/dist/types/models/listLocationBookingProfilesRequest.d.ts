import { Schema } from '../schema';
export interface ListLocationBookingProfilesRequest {
    /** The maximum number of results to return in a paged response. */
    limit?: number | null;
    /** The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. */
    cursor?: string | null;
}
export declare const listLocationBookingProfilesRequestSchema: Schema<ListLocationBookingProfilesRequest>;
