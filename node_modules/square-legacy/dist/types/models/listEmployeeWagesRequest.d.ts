import { Schema } from '../schema';
/** A request for a set of `EmployeeWage` objects. */
export interface ListEmployeeWagesRequest {
    /** Filter the returned wages to only those that are associated with the specified employee. */
    employeeId?: string | null;
    /**
     * The maximum number of `EmployeeWage` results to return per page. The number can range between
     * 1 and 200. The default is 200.
     */
    limit?: number | null;
    /** A pointer to the next page of `EmployeeWage` results to fetch. */
    cursor?: string | null;
}
export declare const listEmployeeWagesRequestSchema: Schema<ListEmployeeWagesRequest>;
