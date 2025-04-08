import { Schema } from '../schema';
import { Employee } from './employee';
import { Error } from './error';
export interface ListEmployeesResponse {
    employees?: Employee[];
    /** The token to be used to retrieve the next page of results. */
    cursor?: string;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const listEmployeesResponseSchema: Schema<ListEmployeesResponse>;
