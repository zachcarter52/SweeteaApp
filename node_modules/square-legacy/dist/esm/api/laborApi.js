import { createBreakTypeRequestSchema, } from '../models/createBreakTypeRequest';
import { createBreakTypeResponseSchema, } from '../models/createBreakTypeResponse';
import { createShiftRequestSchema, } from '../models/createShiftRequest';
import { createShiftResponseSchema, } from '../models/createShiftResponse';
import { deleteBreakTypeResponseSchema, } from '../models/deleteBreakTypeResponse';
import { deleteShiftResponseSchema, } from '../models/deleteShiftResponse';
import { getBreakTypeResponseSchema, } from '../models/getBreakTypeResponse';
import { getEmployeeWageResponseSchema, } from '../models/getEmployeeWageResponse';
import { getShiftResponseSchema, } from '../models/getShiftResponse';
import { getTeamMemberWageResponseSchema, } from '../models/getTeamMemberWageResponse';
import { listBreakTypesResponseSchema, } from '../models/listBreakTypesResponse';
import { listEmployeeWagesResponseSchema, } from '../models/listEmployeeWagesResponse';
import { listTeamMemberWagesResponseSchema, } from '../models/listTeamMemberWagesResponse';
import { listWorkweekConfigsResponseSchema, } from '../models/listWorkweekConfigsResponse';
import { searchShiftsRequestSchema, } from '../models/searchShiftsRequest';
import { searchShiftsResponseSchema, } from '../models/searchShiftsResponse';
import { updateBreakTypeRequestSchema, } from '../models/updateBreakTypeRequest';
import { updateBreakTypeResponseSchema, } from '../models/updateBreakTypeResponse';
import { updateShiftRequestSchema, } from '../models/updateShiftRequest';
import { updateShiftResponseSchema, } from '../models/updateShiftResponse';
import { updateWorkweekConfigRequestSchema, } from '../models/updateWorkweekConfigRequest';
import { updateWorkweekConfigResponseSchema, } from '../models/updateWorkweekConfigResponse';
import { number, optional, string } from '../schema';
import { BaseApi } from './baseApi';
export class LaborApi extends BaseApi {
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
    async listBreakTypes(locationId, limit, cursor, requestOptions) {
        const req = this.createRequest('GET', '/v2/labor/break-types');
        const mapped = req.prepareArgs({
            locationId: [locationId, optional(string())],
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
        });
        req.query('location_id', mapped.locationId);
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listBreakTypesResponseSchema, requestOptions);
    }
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
    async createBreakType(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/labor/break-types');
        const mapped = req.prepareArgs({
            body: [body, createBreakTypeRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createBreakTypeResponseSchema, requestOptions);
    }
    /**
     * Deletes an existing `BreakType`.
     *
     * A `BreakType` can be deleted even if it is referenced from a `Shift`.
     *
     * @param id The UUID for the `BreakType` being deleted.
     * @return Response from the API call
     */
    async deleteBreakType(id, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/labor/break-types/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(deleteBreakTypeResponseSchema, requestOptions);
    }
    /**
     * Returns a single `BreakType` specified by `id`.
     *
     * @param id The UUID for the `BreakType` being retrieved.
     * @return Response from the API call
     */
    async getBreakType(id, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/labor/break-types/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(getBreakTypeResponseSchema, requestOptions);
    }
    /**
     * Updates an existing `BreakType`.
     *
     * @param id           The UUID for the `BreakType` being updated.
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    async updateBreakType(id, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            id: [id, string()],
            body: [body, updateBreakTypeRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/labor/break-types/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateBreakTypeResponseSchema, requestOptions);
    }
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
    async listEmployeeWages(employeeId, limit, cursor, requestOptions) {
        const req = this.createRequest('GET', '/v2/labor/employee-wages');
        const mapped = req.prepareArgs({
            employeeId: [employeeId, optional(string())],
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
        });
        req.query('employee_id', mapped.employeeId);
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.deprecated('LaborApi.listEmployeeWages');
        req.authenticate([{ global: true }]);
        return req.callAsJson(listEmployeeWagesResponseSchema, requestOptions);
    }
    /**
     * Returns a single `EmployeeWage` specified by `id`.
     *
     * @param id The UUID for the `EmployeeWage` being retrieved.
     * @return Response from the API call
     * @deprecated
     */
    async getEmployeeWage(id, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/labor/employee-wages/${mapped.id}`;
        req.deprecated('LaborApi.getEmployeeWage');
        req.authenticate([{ global: true }]);
        return req.callAsJson(getEmployeeWageResponseSchema, requestOptions);
    }
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
    async createShift(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/labor/shifts');
        const mapped = req.prepareArgs({ body: [body, createShiftRequestSchema] });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(createShiftResponseSchema, requestOptions);
    }
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
    async searchShifts(body, requestOptions) {
        const req = this.createRequest('POST', '/v2/labor/shifts/search');
        const mapped = req.prepareArgs({ body: [body, searchShiftsRequestSchema] });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.authenticate([{ global: true }]);
        return req.callAsJson(searchShiftsResponseSchema, requestOptions);
    }
    /**
     * Deletes a `Shift`.
     *
     * @param id The UUID for the `Shift` being deleted.
     * @return Response from the API call
     */
    async deleteShift(id, requestOptions) {
        const req = this.createRequest('DELETE');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/labor/shifts/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(deleteShiftResponseSchema, requestOptions);
    }
    /**
     * Returns a single `Shift` specified by `id`.
     *
     * @param id The UUID for the `Shift` being retrieved.
     * @return Response from the API call
     */
    async getShift(id, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/labor/shifts/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(getShiftResponseSchema, requestOptions);
    }
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
    async updateShift(id, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            id: [id, string()],
            body: [body, updateShiftRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/labor/shifts/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateShiftResponseSchema, requestOptions);
    }
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
    async listTeamMemberWages(teamMemberId, limit, cursor, requestOptions) {
        const req = this.createRequest('GET', '/v2/labor/team-member-wages');
        const mapped = req.prepareArgs({
            teamMemberId: [teamMemberId, optional(string())],
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
        });
        req.query('team_member_id', mapped.teamMemberId);
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listTeamMemberWagesResponseSchema, requestOptions);
    }
    /**
     * Returns a single `TeamMemberWage` specified by `id`.
     *
     * @param id The UUID for the `TeamMemberWage` being retrieved.
     * @return Response from the API call
     */
    async getTeamMemberWage(id, requestOptions) {
        const req = this.createRequest('GET');
        const mapped = req.prepareArgs({ id: [id, string()] });
        req.appendTemplatePath `/v2/labor/team-member-wages/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(getTeamMemberWageResponseSchema, requestOptions);
    }
    /**
     * Returns a list of `WorkweekConfig` instances for a business.
     *
     * @param limit  The maximum number of `WorkweekConfigs` results to return per page.
     * @param cursor A pointer to the next page of `WorkweekConfig` results to fetch.
     * @return Response from the API call
     */
    async listWorkweekConfigs(limit, cursor, requestOptions) {
        const req = this.createRequest('GET', '/v2/labor/workweek-configs');
        const mapped = req.prepareArgs({
            limit: [limit, optional(number())],
            cursor: [cursor, optional(string())],
        });
        req.query('limit', mapped.limit);
        req.query('cursor', mapped.cursor);
        req.authenticate([{ global: true }]);
        return req.callAsJson(listWorkweekConfigsResponseSchema, requestOptions);
    }
    /**
     * Updates a `WorkweekConfig`.
     *
     * @param id           The UUID for the `WorkweekConfig` object being updated.
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    async updateWorkweekConfig(id, body, requestOptions) {
        const req = this.createRequest('PUT');
        const mapped = req.prepareArgs({
            id: [id, string()],
            body: [body, updateWorkweekConfigRequestSchema],
        });
        req.header('Content-Type', 'application/json');
        req.json(mapped.body);
        req.appendTemplatePath `/v2/labor/workweek-configs/${mapped.id}`;
        req.authenticate([{ global: true }]);
        return req.callAsJson(updateWorkweekConfigResponseSchema, requestOptions);
    }
}
//# sourceMappingURL=laborApi.js.map