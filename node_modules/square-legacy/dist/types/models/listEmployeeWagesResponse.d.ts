import { Schema } from '../schema';
import { EmployeeWage } from './employeeWage';
import { Error } from './error';
/**
 * The response to a request for a set of `EmployeeWage` objects. The response contains
 * a set of `EmployeeWage` objects.
 */
export interface ListEmployeeWagesResponse {
    /** A page of `EmployeeWage` results. */
    employeeWages?: EmployeeWage[];
    /**
     * The value supplied in the subsequent request to fetch the next page
     * of `EmployeeWage` results.
     */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listEmployeeWagesResponseSchema: Schema<ListEmployeeWagesResponse>;
