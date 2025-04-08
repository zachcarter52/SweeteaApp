"use strict";
exports.__esModule = true;
exports.EmployeesApi = void 0;
var tslib_1 = require("tslib");
var listEmployeesResponse_1 = require("../models/listEmployeesResponse");
var retrieveEmployeeResponse_1 = require("../models/retrieveEmployeeResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var EmployeesApi = /** @class */ (function (_super) {
    tslib_1.__extends(EmployeesApi, _super);
    function EmployeesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param locationId
     * @param status      Specifies the EmployeeStatus to filter the employee by.
     * @param limit       The number of employees to be returned on each page.
     * @param cursor      The token required to retrieve the specified page of results.
     * @return Response from the API call
     * @deprecated
     */
    EmployeesApi.prototype.listEmployees = function (locationId, status, limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/employees');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())],
                    status: [status, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('location_id', mapped.locationId);
                req.query('status', mapped.status);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.deprecated('EmployeesApi.listEmployees');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listEmployeesResponse_1.listEmployeesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * @param id UUID for the employee that was requested.
     * @return Response from the API call
     * @deprecated
     */
    EmployeesApi.prototype.retrieveEmployee = function (id, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ id: [id, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/employees/", ""], ["/v2/employees/", ""])), mapped.id);
                req.deprecated('EmployeesApi.retrieveEmployee');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveEmployeeResponse_1.retrieveEmployeeResponseSchema, requestOptions)];
            });
        });
    };
    return EmployeesApi;
}(baseApi_1.BaseApi));
exports.EmployeesApi = EmployeesApi;
var templateObject_1;
//# sourceMappingURL=employeesApi.js.map