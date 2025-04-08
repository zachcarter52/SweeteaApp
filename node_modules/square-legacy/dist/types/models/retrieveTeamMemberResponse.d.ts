import { Schema } from '../schema';
import { Error } from './error';
import { TeamMember } from './teamMember';
/** Represents a response from a retrieve request containing a `TeamMember` object or error messages. */
export interface RetrieveTeamMemberResponse {
    /** A record representing an individual team member for a business. */
    teamMember?: TeamMember;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveTeamMemberResponseSchema: Schema<RetrieveTeamMemberResponse>;
