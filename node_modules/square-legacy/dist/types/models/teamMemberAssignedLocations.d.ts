import { Schema } from '../schema';
/** An object that represents a team member's assignment to locations. */
export interface TeamMemberAssignedLocations {
    /** Enumerates the possible assignment types that the team member can have. */
    assignmentType?: string;
    /** The explicit locations that the team member is assigned to. */
    locationIds?: string[] | null;
}
export declare const teamMemberAssignedLocationsSchema: Schema<TeamMemberAssignedLocations>;
