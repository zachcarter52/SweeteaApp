import { Schema } from '../schema';
import { EmployeeWage } from './employeeWage';
import { Error } from './error';
/**
 * A response to a request to get an `EmployeeWage`. The response contains
 * the requested `EmployeeWage` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface GetEmployeeWageResponse {
    /** The hourly wage rate that an employee earns on a `Shift` for doing the job specified by the `title` property of this object. Deprecated at version 2020-08-26. Use [TeamMemberWage](entity:TeamMemberWage). */
    employeeWage?: EmployeeWage;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const getEmployeeWageResponseSchema: Schema<GetEmployeeWageResponse>;
