import { Schema } from '../schema';
import { SearchTeamMembersQuery } from './searchTeamMembersQuery';
/** Represents a search request for a filtered list of `TeamMember` objects. */
export interface SearchTeamMembersRequest {
    /** Represents the parameters in a search for `TeamMember` objects. */
    query?: SearchTeamMembersQuery;
    /** The maximum number of `TeamMember` objects in a page (100 by default). */
    limit?: number;
    /**
     * The opaque cursor for fetching the next page. For more information, see
     * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
}
export declare const searchTeamMembersRequestSchema: Schema<SearchTeamMembersRequest>;
