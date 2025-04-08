import { Schema } from '../schema';
import { Error } from './error';
import { TeamMemberWage } from './teamMemberWage';
/**
 * The response to a request for a set of `TeamMemberWage` objects. The response contains
 * a set of `TeamMemberWage` objects.
 */
export interface ListTeamMemberWagesResponse {
    /** A page of `TeamMemberWage` results. */
    teamMemberWages?: TeamMemberWage[];
    /**
     * The value supplied in the subsequent request to fetch the next page
     * of `TeamMemberWage` results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listTeamMemberWagesResponseSchema: Schema<ListTeamMemberWagesResponse>;
