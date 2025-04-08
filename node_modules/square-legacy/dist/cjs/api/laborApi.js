"use strict";
exports.__esModule = true;
exports.LaborApi = void 0;
var tslib_1 = require("tslib");
var createBreakTypeRequest_1 = require("../models/createBreakTypeRequest");
var createBreakTypeResponse_1 = require("../models/createBreakTypeResponse");
var createShiftRequest_1 = require("../models/createShiftRequest");
var createShiftResponse_1 = require("../models/createShiftResponse");
var deleteBreakTypeResponse_1 = require("../models/deleteBreakTypeResponse");
var deleteShiftResponse_1 = require("../models/deleteShiftResponse");
var getBreakTypeResponse_1 = require("../models/getBreakTypeResponse");
var getEmployeeWageResponse_1 = require("../models/getEmployeeWageResponse");
var getShiftResponse_1 = require("../models/getShiftResponse");
var getTeamMemberWageResponse_1 = require("../models/getTeamMemberWageResponse");
var listBreakTypesResponse_1 = require("../models/listBreakTypesResponse");
var listEmployeeWagesResponse_1 = require("../models/listEmployeeWagesResponse");
var listTeamMemberWagesResponse_1 = require("../models/listTeamMemberWagesResponse");
var listWorkweekConfigsResponse_1 = require("../models/listWorkweekConfigsResponse");
var searchShiftsRequest_1 = require("../models/searchShiftsRequest");
var searchShiftsResponse_1 = require("../models/searchShiftsResponse");
var updateBreakTypeRequest_1 = require("../models/updateBreakTypeRequest");
var updateBreakTypeResponse_1 = require("../models/updateBreakTypeResponse");
var updateShiftRequest_1 = require("../models/updateShiftRequest");
var updateShiftResponse_1 = require("../models/updateShiftResponse");
var updateWorkweekConfigRequest_1 = require("../models/updateWorkweekConfigRequest");
var updateWorkweekConfigResponse_1 = require("../models/updateWorkweekConfigResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var LaborApi = /** @class */ (function (_super) {
    tslib_1.__extends(LaborApi, _super);
    function LaborApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    LaborApi.prototype.listBreakTypes = function (locationId, limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/labor/break-types');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('location_id', mapped.locationId);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listBreakTypesResponse_1.listBreakTypesResponseSchema, requestOptions)];
            });
        });
    };
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
    LaborApi.prototype.createBreakType = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/labor/break-types');
                mapped = req.prepareArgs({
                    body: [body, createBreakTypeRequest_1.createBreakTypeRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createBreakTypeResponse_1.createBreakTypeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes an existing `BreakType`.
     *
     * A `BreakType` can be deleted even if it is referenced from a `Shift`.
     *
     * @param id The UUID for the `BreakType` being deleted.
     * @return Response from the API call
     */
    LaborApi.prototype.deleteBreakType = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/labor/break-types/", ""], ["/v2/labor/break-types/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteBreakTypeResponse_1.deleteBreakTypeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a single `BreakType` specified by `id`.
     *
     * @param id The UUID for the `BreakType` being retrieved.
     * @return Response from the API call
     */
    LaborApi.prototype.getBreakType = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/labor/break-types/", ""], ["/v2/labor/break-types/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getBreakTypeResponse_1.getBreakTypeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates an existing `BreakType`.
     *
     * @param id           The UUID for the `BreakType` being updated.
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    LaborApi.prototype.updateBreakType = function (id, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    id: [id, (0, schema_1.string)()],
                    body: [body, updateBreakTypeRequest_1.updateBreakTypeRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/labor/break-types/", ""], ["/v2/labor/break-types/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateBreakTypeResponse_1.updateBreakTypeResponseSchema, requestOptions)];
            });
        });
    };
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
    LaborApi.prototype.listEmployeeWages = function (employeeId, limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/labor/employee-wages');
                mapped = req.prepareArgs({
                    employeeId: [employeeId, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('employee_id', mapped.employeeId);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.deprecated('LaborApi.listEmployeeWages');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listEmployeeWagesResponse_1.listEmployeeWagesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a single `EmployeeWage` specified by `id`.
     *
     * @param id The UUID for the `EmployeeWage` being retrieved.
     * @return Response from the API call
     * @deprecated
     */
    LaborApi.prototype.getEmployeeWage = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/labor/employee-wages/", ""], ["/v2/labor/employee-wages/", ""])), mapped.id);
                req.deprecated('LaborApi.getEmployeeWage');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getEmployeeWageResponse_1.getEmployeeWageResponseSchema, requestOptions)];
            });
        });
    };
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
    LaborApi.prototype.createShift = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/labor/shifts');
                mapped = req.prepareArgs({ body: [body, createShiftRequest_1.createShiftRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createShiftResponse_1.createShiftResponseSchema, requestOptions)];
            });
        });
    };
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
    LaborApi.prototype.searchShifts = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/labor/shifts/search');
                mapped = req.prepareArgs({ body: [body, searchShiftsRequest_1.searchShiftsRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchShiftsResponse_1.searchShiftsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a `Shift`.
     *
     * @param id The UUID for the `Shift` being deleted.
     * @return Response from the API call
     */
    LaborApi.prototype.deleteShift = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/labor/shifts/", ""], ["/v2/labor/shifts/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteShiftResponse_1.deleteShiftResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a single `Shift` specified by `id`.
     *
     * @param id The UUID for the `Shift` being retrieved.
     * @return Response from the API call
     */
    LaborApi.prototype.getShift = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/labor/shifts/", ""], ["/v2/labor/shifts/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getShiftResponse_1.getShiftResponseSchema, requestOptions)];
            });
        });
    };
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
    LaborApi.prototype.updateShift = function (id, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    id: [id, (0, schema_1.string)()],
                    body: [body, updateShiftRequest_1.updateShiftRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/labor/shifts/", ""], ["/v2/labor/shifts/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateShiftResponse_1.updateShiftResponseSchema, requestOptions)];
            });
        });
    };
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
    LaborApi.prototype.listTeamMemberWages = function (teamMemberId, limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/labor/team-member-wages');
                mapped = req.prepareArgs({
                    teamMemberId: [teamMemberId, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('team_member_id', mapped.teamMemberId);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listTeamMemberWagesResponse_1.listTeamMemberWagesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a single `TeamMemberWage` specified by `id`.
     *
     * @param id The UUID for the `TeamMemberWage` being retrieved.
     * @return Response from the API call
     */
    LaborApi.prototype.getTeamMemberWage = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["/v2/labor/team-member-wages/", ""], ["/v2/labor/team-member-wages/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getTeamMemberWageResponse_1.getTeamMemberWageResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a list of `WorkweekConfig` instances for a business.
     *
     * @param limit  The maximum number of `WorkweekConfigs` results to return per page.
     * @param cursor A pointer to the next page of `WorkweekConfig` results to fetch.
     * @return Response from the API call
     */
    LaborApi.prototype.listWorkweekConfigs = function (limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/labor/workweek-configs');
                mapped = req.prepareArgs({
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listWorkweekConfigsResponse_1.listWorkweekConfigsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a `WorkweekConfig`.
     *
     * @param id           The UUID for the `WorkweekConfig` object being updated.
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    LaborApi.prototype.updateWorkweekConfig = function (id, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    id: [id, (0, schema_1.string)()],
                    body: [body, updateWorkweekConfigRequest_1.updateWorkweekConfigRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["/v2/labor/workweek-configs/", ""], ["/v2/labor/workweek-configs/", ""])), mapped.id);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateWorkweekConfigResponse_1.updateWorkweekConfigResponseSchema, requestOptions)];
            });
        });
    };
    return LaborApi;
}(baseApi_1.BaseApi));
exports.LaborApi = LaborApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=laborApi.js.map