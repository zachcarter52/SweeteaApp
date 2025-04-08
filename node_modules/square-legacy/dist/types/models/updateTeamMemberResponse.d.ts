import { Schema } from '../schema';
import { Error } from './error';
import { TeamMember } from './teamMember';
/** Represents a response from an update request containing the updated `TeamMember` object or error messages. */
export interface UpdateTeamMemberResponse {
    /** A record representing an individual team member for a business. */
    teamMember?: TeamMember;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const updateTeamMemberResponseSchema: Schema<UpdateTeamMemberResponse>;
