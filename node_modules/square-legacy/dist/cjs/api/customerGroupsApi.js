"use strict";
exports.__esModule = true;
exports.CustomerGroupsApi = void 0;
var tslib_1 = require("tslib");
var createCustomerGroupRequest_1 = require("../models/createCustomerGroupRequest");
var createCustomerGroupResponse_1 = require("../models/createCustomerGroupResponse");
var deleteCustomerGroupResponse_1 = require("../models/deleteCustomerGroupResponse");
var listCustomerGroupsResponse_1 = require("../models/listCustomerGroupsResponse");
var retrieveCustomerGroupResponse_1 = require("../models/retrieveCustomerGroupResponse");
var updateCustomerGroupRequest_1 = require("../models/updateCustomerGroupRequest");
var updateCustomerGroupResponse_1 = require("../models/updateCustomerGroupResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CustomerGroupsApi = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerGroupsApi, _super);
    function CustomerGroupsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the list of customer groups of a business.
     *
     * @param cursor A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     *                         retrieve the next set of results for your original query.  For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param limit  The maximum number of results to return in a single page. This limit is advisory. The
     *                         response might contain more or fewer results. If the limit is less than 1 or greater than
     *                         50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value
     *                         is 50.  For more information, see [Pagination](https://developer.squareup.com/docs/build-
     *                         basics/common-api-patterns/pagination).
     * @return Response from the API call
     */
    CustomerGroupsApi.prototype.listCustomerGroups = function (cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/customers/groups');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCustomerGroupsResponse_1.listCustomerGroupsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a new customer group for a business.
     *
     * The request must include the `name` value of the group.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    CustomerGroupsApi.prototype.createCustomerGroup = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/groups');
                mapped = req.prepareArgs({
                    body: [body, createCustomerGroupRequest_1.createCustomerGroupRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createCustomerGroupResponse_1.createCustomerGroupResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to delete.
     * @return Response from the API call
     */
    CustomerGroupsApi.prototype.deleteCustomerGroup = function (groupId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ groupId: [groupId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/customers/groups/", ""], ["/v2/customers/groups/", ""])), mapped.groupId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteCustomerGroupResponse_1.deleteCustomerGroupResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a specific customer group as identified by the `group_id` value.
     *
     * @param groupId  The ID of the customer group to retrieve.
     * @return Response from the API call
     */
    CustomerGroupsApi.prototype.retrieveCustomerGroup = function (groupId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ groupId: [groupId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/customers/groups/", ""], ["/v2/customers/groups/", ""])), mapped.groupId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCustomerGroupResponse_1.retrieveCustomerGroupResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a customer group as identified by the `group_id` value.
     *
     * @param groupId      The ID of the customer group to update.
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    CustomerGroupsApi.prototype.updateCustomerGroup = function (groupId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    groupId: [groupId, (0, schema_1.string)()],
                    body: [body, updateCustomerGroupRequest_1.updateCustomerGroupRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/customers/groups/", ""], ["/v2/customers/groups/", ""])), mapped.groupId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateCustomerGroupResponse_1.updateCustomerGroupResponseSchema, requestOptions)];
            });
        });
    };
    return CustomerGroupsApi;
}(baseApi_1.BaseApi));
exports.CustomerGroupsApi = CustomerGroupsApi;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=customerGroupsApi.js.map