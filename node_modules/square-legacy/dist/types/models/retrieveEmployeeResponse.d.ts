import { Schema } from '../schema';
import { Employee } from './employee';
import { Error } from './error';
export interface RetrieveEmployeeResponse {
    /**
     * An employee object that is used by the external API.
     * DEPRECATED at version 2020-08-26. Replaced by [TeamMember](entity:TeamMember).
     */
    employee?: Employee;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveEmployeeResponseSchema: Schema<RetrieveEmployeeResponse>;
