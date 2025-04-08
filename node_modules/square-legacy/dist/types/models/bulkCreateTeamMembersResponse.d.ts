import { Schema } from '../schema';
import { CreateTeamMemberResponse } from './createTeamMemberResponse';
import { Error } from './error';
/** Represents a response from a bulk create request containing the created `TeamMember` objects or error messages. */
export interface BulkCreateTeamMembersResponse {
    /** The successfully created `TeamMember` objects. Each key is the `idempotency_key` that maps to the `CreateTeamMemberRequest`. */
    teamMembers?: Record<string, CreateTeamMemberResponse>;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkCreateTeamMembersResponseSchema: Schema<BulkCreateTeamMembersResponse>;
