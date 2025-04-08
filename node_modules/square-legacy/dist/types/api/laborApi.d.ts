import { ApiResponse, RequestOptions } from '../core';
import { CreateBreakTypeRequest } from '../models/createBreakTypeRequest';
import { CreateBreakTypeResponse } from '../models/createBreakTypeResponse';
import { CreateShiftRequest } from '../models/createShiftRequest';
import { CreateShiftResponse } from '../models/createShiftResponse';
import { DeleteBreakTypeResponse } from '../models/deleteBreakTypeResponse';
import { DeleteShiftResponse } from '../models/deleteShiftResponse';
import { GetBreakTypeResponse } from '../models/getBreakTypeResponse';
import { GetEmployeeWageResponse } from '../models/getEmployeeWageResponse';
import { GetShiftResponse } from '../models/getShiftResponse';
import { GetTeamMemberWageResponse } from '../models/getTeamMemberWageResponse';
import { ListBreakTypesResponse } from '../models/listBreakTypesResponse';
import { ListEmployeeWagesResponse } from '../models/listEmployeeWagesResponse';
import { ListTeamMemberWagesResponse } from '../models/listTeamMemberWagesResponse';
import { ListWorkweekConfigsResponse } from '../models/listWorkweekConfigsResponse';
import { SearchShiftsRequest } from '../models/searchShiftsRequest';
import { SearchShiftsResponse } from '../models/searchShiftsResponse';
import { UpdateBreakTypeRequest } from '../models/updateBreakTypeRequest';
import { UpdateBreakTypeResponse } from '../models/updateBreakTypeResponse';
import { UpdateShiftRequest } from '../models/updateShiftRequest';
import { UpdateShiftResponse } from '../models/updateShiftResponse';
import { UpdateWorkweekConfigRequest } from '../models/updateWorkweekConfigRequest';
import { UpdateWorkweekConfigResponse } from '../models/updateWorkweekConfigResponse';
import { BaseApi } from './baseApi';
export declare class LaborApi extends BaseApi {
    /**
     * Returns a paginated list of `BreakType` instances for a business.
     *
     * @param locationId  Filter the returned `BreakType` results to only those that are associated with the
     *                              specified location.
     * @param limit       The maximum number of `BreakType` results to return per page. The number can range
     *                              between 1 and 200. The default is 200.
     * @param cursor      A pointer to the next page of `BreakType` results to fetch.
     * @return Response from the API call
     */
    listBreakTypes(locationId?: string, limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListBreakTypesResponse>>;
    /**
     * Creates a new `BreakType`.
     *
     * A `BreakType` is a template for creating `Break` objects.
     * You must provide the following values in your request to this
     * endpoint:
     *
     * - `location_id`
     * - `break_name`
     * - `expected_duration`
     * - `is_paid`
     *
     * You can only have three `BreakType` instances per location. If you attempt to add a fourth
     * `BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
     * is returned.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    createBreakType(body: CreateBreakTypeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateBreakTypeResponse>>;
    /**
     * Deletes an existing `BreakType`.
     *
     * A `BreakType` can be deleted even if it is referenced from a `Shift`.
     *
     * @param id The UUID for the `BreakType` being deleted.
     * @return Response from the API call
     */
    deleteBreakType(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteBreakTypeResponse>>;
    /**
     * Returns a single `BreakType` specified by `id`.
     *
     * @param id The UUID for the `BreakType` being retrieved.
     * @return Response from the API call
     */
    getBreakType(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetBreakTypeResponse>>;
    /**
     * Updates an existing `BreakType`.
     *
     * @param id           The UUID for the `BreakType` being updated.
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateBreakType(id: string, body: UpdateBreakTypeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateBreakTypeResponse>>;
    /**
     * Returns a paginated list of `EmployeeWage` instances for a business.
     *
     * @param employeeId  Filter the returned wages to only those that are associated with the specified
     *                              employee.
     * @param limit       The maximum number of `EmployeeWage` results to return per page. The number can
     *                              range between 1 and 200. The default is 200.
     * @param cursor      A pointer to the next page of `EmployeeWage` results to fetch.
     * @return Response from the API call
     * @deprecated
     */
    listEmployeeWages(employeeId?: string, limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListEmployeeWagesResponse>>;
    /**
     * Returns a single `EmployeeWage` specified by `id`.
     *
     * @param id The UUID for the `EmployeeWage` being retrieved.
     * @return Response from the API call
     * @deprecated
     */
    getEmployeeWage(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetEmployeeWageResponse>>;
    /**
     * Creates a new `Shift`.
     *
     * A `Shift` represents a complete workday for a single team member.
     * You must provide the following values in your request to this
     * endpoint:
     *
     * - `location_id`
     * - `team_member_id`
     * - `start_at`
     *
     * An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
     * - The `status` of the new `Shift` is `OPEN` and the team member has another
     * shift with an `OPEN` status.
     * - The `start_at` date is in the future.
     * - The `start_at` or `end_at` date overlaps another shift for the same team member.
     * - The `Break` instances are set in the request and a break `start_at`
     * is before the `Shift.start_at`, a break `end_at` is after
     * the `Shift.end_at`, or both.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    createShift(body: CreateShiftRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateShiftResponse>>;
    /**
     * Returns a paginated list of `Shift` records for a business.
     * The list to be returned can be filtered by:
     * - Location IDs
     * - Team member IDs
     * - Shift status (`OPEN` or `CLOSED`)
     * - Shift start
     * - Shift end
     * - Workday details
     *
     * The list can be sorted by:
     * - `START_AT`
     * - `END_AT`
     * - `CREATED_AT`
     * - `UPDATED_AT`
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchShifts(body: SearchShiftsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchShiftsResponse>>;
    /**
     * Deletes a `Shift`.
     *
     * @param id The UUID for the `Shift` being deleted.
     * @return Response from the API call
     */
    deleteShift(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteShiftResponse>>;
    /**
     * Returns a single `Shift` specified by `id`.
     *
     * @param id The UUID for the `Shift` being retrieved.
     * @return Response from the API call
     */
    getShift(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetShiftResponse>>;
    /**
     * Updates an existing `Shift`.
     *
     * When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
     * the `end_at` property set to a valid RFC-3339 datetime string.
     *
     * When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
     * set on each `Break`.
     *
     * @param id           The ID of the object being updated.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateShift(id: string, body: UpdateShiftRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateShiftResponse>>;
    /**
     * Returns a paginated list of `TeamMemberWage` instances for a business.
     *
     * @param teamMemberId   Filter the returned wages to only those that are associated with the specified
     *                                 team member.
     * @param limit          The maximum number of `TeamMemberWage` results to return per page. The number can
     *                                 range between 1 and 200. The default is 200.
     * @param cursor         A pointer to the next page of `EmployeeWage` results to fetch.
     * @return Response from the API call
     */
    listTeamMemberWages(teamMemberId?: string, limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListTeamMemberWagesResponse>>;
    /**
     * Returns a single `TeamMemberWage` specified by `id`.
     *
     * @param id The UUID for the `TeamMemberWage` being retrieved.
     * @return Response from the API call
     */
    getTeamMemberWage(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetTeamMemberWageResponse>>;
    /**
     * Returns a list of `WorkweekConfig` instances for a business.
     *
     * @param limit  The maximum number of `WorkweekConfigs` results to return per page.
     * @param cursor A pointer to the next page of `WorkweekConfig` results to fetch.
     * @return Response from the API call
     */
    listWorkweekConfigs(limit?: number, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListWorkweekConfigsResponse>>;
    /**
     * Updates a `WorkweekConfig`.
     *
     * @param id           The UUID for the `WorkweekConfig` object being updated.
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    updateWorkweekConfig(id: string, body: UpdateWorkweekConfigRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateWorkweekConfigResponse>>;
}
