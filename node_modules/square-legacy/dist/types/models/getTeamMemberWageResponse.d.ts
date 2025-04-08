import { Schema } from '../schema';
import { Error } from './error';
import { TeamMemberWage } from './teamMemberWage';
/**
 * A response to a request to get a `TeamMemberWage`. The response contains
 * the requested `TeamMemberWage` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetTeamMemberWageResponse {
    /**
     * The hourly wage rate that a team member earns on a `Shift` for doing the job
     * specified by the `title` property of this object.
     */
    teamMemberWage?: TeamMemberWage;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const getTeamMemberWageResponseSchema: Schema<GetTeamMemberWageResponse>;
