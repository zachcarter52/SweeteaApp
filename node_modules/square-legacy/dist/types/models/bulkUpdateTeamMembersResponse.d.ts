import { Schema } from '../schema';
import { Error } from './error';
import { UpdateTeamMemberResponse } from './updateTeamMemberResponse';
/** Represents a response from a bulk update request containing the updated `TeamMember` objects or error messages. */
export interface BulkUpdateTeamMembersResponse {
    /** The successfully updated `TeamMember` objects. Each key is the `team_member_id` that maps to the `UpdateTeamMemberRequest`. */
    teamMembers?: Record<string, UpdateTeamMemberResponse>;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkUpdateTeamMembersResponseSchema: Schema<BulkUpdateTeamMembersResponse>;
