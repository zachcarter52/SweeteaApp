import { Schema } from '../schema';
import { Error } from './error';
import { TeamMember } from './teamMember';
/** Represents a response from a create request containing the created `TeamMember` object or error messages. */
export interface CreateTeamMemberResponse {
    /** A record representing an individual team member for a business. */
    teamMember?: TeamMember;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const createTeamMemberResponseSchema: Schema<CreateTeamMemberResponse>;
