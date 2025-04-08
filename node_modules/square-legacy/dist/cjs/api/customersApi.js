"use strict";
exports.__esModule = true;
exports.CustomersApi = void 0;
var tslib_1 = require("tslib");
var addGroupToCustomerResponse_1 = require("../models/addGroupToCustomerResponse");
var bulkCreateCustomersRequest_1 = require("../models/bulkCreateCustomersRequest");
var bulkCreateCustomersResponse_1 = require("../models/bulkCreateCustomersResponse");
var bulkDeleteCustomersRequest_1 = require("../models/bulkDeleteCustomersRequest");
var bulkDeleteCustomersResponse_1 = require("../models/bulkDeleteCustomersResponse");
var bulkRetrieveCustomersRequest_1 = require("../models/bulkRetrieveCustomersRequest");
var bulkRetrieveCustomersResponse_1 = require("../models/bulkRetrieveCustomersResponse");
var bulkUpdateCustomersRequest_1 = require("../models/bulkUpdateCustomersRequest");
var bulkUpdateCustomersResponse_1 = require("../models/bulkUpdateCustomersResponse");
var createCustomerCardRequest_1 = require("../models/createCustomerCardRequest");
var createCustomerCardResponse_1 = require("../models/createCustomerCardResponse");
var createCustomerRequest_1 = require("../models/createCustomerRequest");
var createCustomerResponse_1 = require("../models/createCustomerResponse");
var deleteCustomerCardResponse_1 = require("../models/deleteCustomerCardResponse");
var deleteCustomerResponse_1 = require("../models/deleteCustomerResponse");
var listCustomersResponse_1 = require("../models/listCustomersResponse");
var removeGroupFromCustomerResponse_1 = require("../models/removeGroupFromCustomerResponse");
var retrieveCustomerResponse_1 = require("../models/retrieveCustomerResponse");
var searchCustomersRequest_1 = require("../models/searchCustomersRequest");
var searchCustomersResponse_1 = require("../models/searchCustomersResponse");
var updateCustomerRequest_1 = require("../models/updateCustomerRequest");
var updateCustomerResponse_1 = require("../models/updateCustomerResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CustomersApi = /** @class */ (function (_super) {
    tslib_1.__extends(CustomersApi, _super);
    function CustomersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists customer profiles associated with a Square account.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     *
     * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for your original query.  For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination).
     * @param limit      The maximum number of results to return in a single page. This limit is advisory.
     *                              The response might contain more or fewer results. If the specified limit is less than
     *                              1 or greater than 100, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH`
     *                              error. The default value is 100.  For more information, see [Pagination](https:
     *                              //developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param sortField  Indicates how customers should be sorted.  The default value is `DEFAULT`.
     * @param sortOrder  Indicates whether customers should be sorted in ascending (`ASC`) or descending
     *                              (`DESC`) order.  The default value is `ASC`.
     * @param count      Indicates whether to return the total count of customers in the `count` field of the
     *                              response.  The default value is `false`.
     * @return Response from the API call
     */
    CustomersApi.prototype.listCustomers = function (cursor, limit, sortField, sortOrder, count, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/customers');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    sortField: [sortField, (0, schema_1.optional)((0, schema_1.string)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    count: [count, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.query('sort_field', mapped.sortField);
                req.query('sort_order', mapped.sortOrder);
                req.query('count', mapped.count);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCustomersResponse_1.listCustomersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a new customer for a business.
     *
     * You must provide at least one of the following values in your request to this
     * endpoint:
     *
     * - `given_name`
     * - `family_name`
     * - `company_name`
     * - `email_address`
     * - `phone_number`
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    CustomersApi.prototype.createCustomer = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers');
                mapped = req.prepareArgs({
                    body: [body, createCustomerRequest_1.createCustomerRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createCustomerResponse_1.createCustomerResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates multiple [customer profiles]($m/Customer) for a business.
     *
     * This endpoint takes a map of individual create requests and returns a map of responses.
     *
     * You must provide at least one of the following values in each create request:
     *
     * - `given_name`
     * - `family_name`
     * - `company_name`
     * - `email_address`
     * - `phone_number`
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    CustomersApi.prototype.bulkCreateCustomers = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/bulk-create');
                mapped = req.prepareArgs({
                    body: [body, bulkCreateCustomersRequest_1.bulkCreateCustomersRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkCreateCustomersResponse_1.bulkCreateCustomersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes multiple customer profiles.
     *
     * The endpoint takes a list of customer IDs and returns a map of responses.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    CustomersApi.prototype.bulkDeleteCustomers = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/bulk-delete');
                mapped = req.prepareArgs({
                    body: [body, bulkDeleteCustomersRequest_1.bulkDeleteCustomersRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkDeleteCustomersResponse_1.bulkDeleteCustomersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves multiple customer profiles.
     *
     * This endpoint takes a list of customer IDs and returns a map of responses.
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    CustomersApi.prototype.bulkRetrieveCustomers = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/bulk-retrieve');
                mapped = req.prepareArgs({
                    body: [body, bulkRetrieveCustomersRequest_1.bulkRetrieveCustomersRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkRetrieveCustomersResponse_1.bulkRetrieveCustomersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates multiple customer profiles.
     *
     * This endpoint takes a map of individual update requests and returns a map of responses.
     *
     * You cannot use this endpoint to change cards on file. To make changes, use the [Cards API]($e/Cards)
     * or [Gift Cards API]($e/GiftCards).
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    CustomersApi.prototype.bulkUpdateCustomers = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/bulk-update');
                mapped = req.prepareArgs({
                    body: [body, bulkUpdateCustomersRequest_1.bulkUpdateCustomersRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkUpdateCustomersResponse_1.bulkUpdateCustomersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches the customer profiles associated with a Square account using one or more supported query
     * filters.
     *
     * Calling `SearchCustomers` without any explicit query filter returns all
     * customer profiles ordered alphabetically based on `given_name` and
     * `family_name`.
     *
     * Under normal operating conditions, newly created or updated customer profiles become available
     * for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
     * profiles can take closer to one minute or longer, especially during network incidents and outages.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    CustomersApi.prototype.searchCustomers = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/search');
                mapped = req.prepareArgs({
                    body: [body, searchCustomersRequest_1.searchCustomersRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchCustomersResponse_1.searchCustomersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a customer profile from a business. This operation also unlinks any associated cards on file.
     *
     * To delete a customer profile that was created by merging existing profiles, you must use the ID of
     * the newly created profile.
     *
     * @param customerId  The ID of the customer to delete.
     * @param version     The current version of the customer profile.  As a best practice, you should include
     *                              this parameter to enable [optimistic concurrency](https://developer.squareup.
     *                              com/docs/build-basics/common-api-patterns/optimistic-concurrency) control.  For more
     *                              information, see [Delete a customer profile](https://developer.squareup.
     *                              com/docs/customers-api/use-the-api/keep-records#delete-customer-profile).
     * @return Response from the API call
     */
    CustomersApi.prototype.deleteCustomer = function (customerId, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    version: [version, (0, schema_1.optional)((0, schema_1.bigint)())]
                });
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/customers/", ""], ["/v2/customers/", ""])), mapped.customerId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteCustomerResponse_1.deleteCustomerResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns details for a single customer.
     *
     * @param customerId  The ID of the customer to retrieve.
     * @return Response from the API call
     */
    CustomersApi.prototype.retrieveCustomer = function (customerId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ customerId: [customerId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/customers/", ""], ["/v2/customers/", ""])), mapped.customerId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCustomerResponse_1.retrieveCustomerResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a customer profile. This endpoint supports sparse updates, so only new or changed fields are
     * required in the request.
     * To add or update a field, specify the new value. To remove a field, specify `null`.
     *
     * To update a customer profile that was created by merging existing profiles, you must use the ID of
     * the newly created profile.
     *
     * You cannot use this endpoint to change cards on file. To make changes, use the [Cards API]($e/Cards)
     * or [Gift Cards API]($e/GiftCards).
     *
     * @param customerId   The ID of the customer to update.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    CustomersApi.prototype.updateCustomer = function (customerId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    body: [body, updateCustomerRequest_1.updateCustomerRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/customers/", ""], ["/v2/customers/", ""])), mapped.customerId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateCustomerResponse_1.updateCustomerResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Adds a card on file to an existing customer.
     *
     * As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
     * calls with the same card nonce return the same card record that was created
     * with the provided nonce during the _first_ call.
     *
     * @param customerId   The Square ID of the customer profile the card is linked
     *                                                         to.
     * @param body         An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    CustomersApi.prototype.createCustomerCard = function (customerId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    body: [body, createCustomerCardRequest_1.createCustomerCardRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/customers/", "/cards"], ["/v2/customers/", "/cards"])), mapped.customerId);
                req.deprecated('CustomersApi.createCustomerCard');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createCustomerCardResponse_1.createCustomerCardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Removes a card on file from a customer.
     *
     * @param customerId  The ID of the customer that the card on file belongs to.
     * @param cardId      The ID of the card on file to delete.
     * @return Response from the API call
     * @deprecated
     */
    CustomersApi.prototype.deleteCustomerCard = function (customerId, cardId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    cardId: [cardId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/customers/", "/cards/", ""], ["/v2/customers/", "/cards/", ""])), mapped.customerId, mapped.cardId);
                req.deprecated('CustomersApi.deleteCustomerCard');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteCustomerCardResponse_1.deleteCustomerCardResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Removes a group membership from a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     *
     * @param customerId  The ID of the customer to remove from the group.
     * @param groupId     The ID of the customer group to remove the customer from.
     * @return Response from the API call
     */
    CustomersApi.prototype.removeGroupFromCustomer = function (customerId, groupId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    groupId: [groupId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/customers/", "/groups/", ""], ["/v2/customers/", "/groups/", ""])), mapped.customerId, mapped.groupId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(removeGroupFromCustomerResponse_1.removeGroupFromCustomerResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Adds a group membership to a customer.
     *
     * The customer is identified by the `customer_id` value
     * and the customer group is identified by the `group_id` value.
     *
     * @param customerId  The ID of the customer to add to a group.
     * @param groupId     The ID of the customer group to add the customer to.
     * @return Response from the API call
     */
    CustomersApi.prototype.addGroupToCustomer = function (customerId, groupId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    groupId: [groupId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/customers/", "/groups/", ""], ["/v2/customers/", "/groups/", ""])), mapped.customerId, mapped.groupId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(addGroupToCustomerResponse_1.addGroupToCustomerResponseSchema, requestOptions)];
            });
        });
    };
    return CustomersApi;
}(baseApi_1.BaseApi));
exports.CustomersApi = CustomersApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=customersApi.js.map