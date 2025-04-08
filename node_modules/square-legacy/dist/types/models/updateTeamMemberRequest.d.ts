import { Schema } from '../schema';
import { TeamMember } from './teamMember';
/** Represents an update request for a `TeamMember` object. */
export interface UpdateTeamMemberRequest {
    /** A record representing an individual team member for a business. */
    teamMember?: TeamMember;
}
export declare const updateTeamMemberRequestSchema: Schema<UpdateTeamMemberRequest>;
