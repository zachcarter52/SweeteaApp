import { ApiResponse, RequestOptions } from '../core';
import { ListEmployeesResponse } from '../models/listEmployeesResponse';
import { RetrieveEmployeeResponse } from '../models/retrieveEmployeeResponse';
import { BaseApi } from './baseApi';
export declare class EmployeesApi extends BaseApi {
    /**
     * @param locationId
     * @param status      Specifies the EmployeeStatus to filter the employee by.
     * @param limit       The number of employees to be returned on each page.
     * @param cursor      The token required to retrieve the specified page of results.
     * @return Response from the API call
     * @deprecated
     */
    listEmployees(locationId?: string, status?: string, limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListEmployeesResponse>>;
    /**
     * @param id UUID for the employee that was requested.
     * @return Response from the API call
     * @deprecated
     */
    retrieveEmployee(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveEmployeeResponse>>;
}
