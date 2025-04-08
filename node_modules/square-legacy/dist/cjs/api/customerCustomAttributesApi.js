"use strict";
exports.__esModule = true;
exports.CustomerCustomAttributesApi = void 0;
var tslib_1 = require("tslib");
var bulkUpsertCustomerCustomAttributesRequest_1 = require("../models/bulkUpsertCustomerCustomAttributesRequest");
var bulkUpsertCustomerCustomAttributesResponse_1 = require("../models/bulkUpsertCustomerCustomAttributesResponse");
var createCustomerCustomAttributeDefinitionRequest_1 = require("../models/createCustomerCustomAttributeDefinitionRequest");
var createCustomerCustomAttributeDefinitionResponse_1 = require("../models/createCustomerCustomAttributeDefinitionResponse");
var deleteCustomerCustomAttributeDefinitionResponse_1 = require("../models/deleteCustomerCustomAttributeDefinitionResponse");
var deleteCustomerCustomAttributeResponse_1 = require("../models/deleteCustomerCustomAttributeResponse");
var listCustomerCustomAttributeDefinitionsResponse_1 = require("../models/listCustomerCustomAttributeDefinitionsResponse");
var listCustomerCustomAttributesResponse_1 = require("../models/listCustomerCustomAttributesResponse");
var retrieveCustomerCustomAttributeDefinitionResponse_1 = require("../models/retrieveCustomerCustomAttributeDefinitionResponse");
var retrieveCustomerCustomAttributeResponse_1 = require("../models/retrieveCustomerCustomAttributeResponse");
var updateCustomerCustomAttributeDefinitionRequest_1 = require("../models/updateCustomerCustomAttributeDefinitionRequest");
var updateCustomerCustomAttributeDefinitionResponse_1 = require("../models/updateCustomerCustomAttributeDefinitionResponse");
var upsertCustomerCustomAttributeRequest_1 = require("../models/upsertCustomerCustomAttributeRequest");
var upsertCustomerCustomAttributeResponse_1 = require("../models/upsertCustomerCustomAttributeResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CustomerCustomAttributesApi = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerCustomAttributesApi, _super);
    function CustomerCustomAttributesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists the customer-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong
     * to a Square seller account.
     *
     * When all response pages are retrieved, the results include all custom attribute definitions
     * that are visible to the requesting application, including those that are created by other
     * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
     * seller-defined custom attributes (also known as custom fields) are always set to
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param limit  The maximum number of results to return in a single paged response. This limit is
     *                         advisory. The response might contain more or fewer results. The minimum value is 1 and the
     *                         maximum value is 100. The default value is 20. For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @param cursor The cursor returned in the paged response from the previous call to this endpoint.
     *                         Provide this cursor to retrieve the next page of results for your original request. For
     *                         more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                         api-patterns/pagination).
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.listCustomerCustomAttributeDefinitions = function (limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/customers/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCustomerCustomAttributeDefinitionsResponse_1.listCustomerCustomAttributeDefinitionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a customer-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     * Use this endpoint to define a custom attribute that can be associated with customer profiles.
     *
     * A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
     * for a custom attribute. After the definition is created, you can call
     * [UpsertCustomerCustomAttribute]($e/CustomerCustomAttributes/UpsertCustomerCustomAttribute) or
     * [BulkUpsertCustomerCustomAttributes]($e/CustomerCustomAttributes/BulkUpsertCustomerCustomAttributes)
     * to set the custom attribute for customer profiles in the seller's Customer Directory.
     *
     * Sellers can view all custom attributes in exported customer data, including those set to
     * `VISIBILITY_HIDDEN`.
     *
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.createCustomerCustomAttributeDefinition = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    body: [body, createCustomerCustomAttributeDefinitionRequest_1.createCustomerCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createCustomerCustomAttributeDefinitionResponse_1.createCustomerCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a customer-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     *
     * Deleting a custom attribute definition also deletes the corresponding custom attribute from
     * all customer profiles in the seller's Customer Directory.
     *
     * Only the definition owner can delete a custom attribute definition.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.deleteCustomerCustomAttributeDefinition = function (key, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ key: [key, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/customers/custom-attribute-definitions/", ""], ["/v2/customers/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteCustomerCustomAttributeDefinitionResponse_1.deleteCustomerCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a customer-related [custom attribute definition]($m/CustomAttributeDefinition) from a
     * Square seller account.
     *
     * To retrieve a custom attribute definition created by another application, the `visibility`
     * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined
     * custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param key     The key of the custom attribute definition to retrieve. If the requesting application is
     *                          not the definition owner, you must use the qualified key.
     * @param version The current version of the custom attribute definition, which is used for strongly
     *                          consistent reads to guarantee that you receive the most up-to-date data. When included in
     *                          the request, Square returns the specified version or a higher version if one exists. If
     *                          the specified version is higher than the current version, Square returns a `BAD_REQUEST`
     *                          error.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.retrieveCustomerCustomAttributeDefinition = function (key, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/customers/custom-attribute-definitions/", ""], ["/v2/customers/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCustomerCustomAttributeDefinitionResponse_1.retrieveCustomerCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a customer-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     *
     * Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
     * `schema` for a `Selection` data type.
     *
     * Only the definition owner can update a custom attribute definition. Note that sellers can view
     * all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
     *
     * @param key          The key of the custom attribute
     *                                                                              definition to update.
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.updateCustomerCustomAttributeDefinition = function (key, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    body: [body, updateCustomerCustomAttributeDefinitionRequest_1.updateCustomerCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/customers/custom-attribute-definitions/", ""], ["/v2/customers/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateCustomerCustomAttributeDefinitionResponse_1.updateCustomerCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates or updates [custom attributes]($m/CustomAttribute) for customer profiles as a bulk operation.
     *
     * Use this endpoint to set the value of one or more custom attributes for one or more customer
     * profiles.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which is
     * created using the
     * [CreateCustomerCustomAttributeDefinition]($e/CustomerCustomAttributes/CreateCustomerCustomAttributeD
     * efinition) endpoint.
     *
     * This `BulkUpsertCustomerCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
     * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
     * and provides a customer ID and custom attribute. Each upsert response is returned with the ID
     * of the corresponding request.
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.bulkUpsertCustomerCustomAttributes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/customers/custom-attributes/bulk-upsert');
                mapped = req.prepareArgs({
                    body: [body, bulkUpsertCustomerCustomAttributesRequest_1.bulkUpsertCustomerCustomAttributesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkUpsertCustomerCustomAttributesResponse_1.bulkUpsertCustomerCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists the [custom attributes]($m/CustomAttribute) associated with a customer profile.
     *
     * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
     * in the same call.
     *
     * When all response pages are retrieved, the results include all custom attributes that are
     * visible to the requesting application, including those that are owned by other applications
     * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId       The ID of the target [customer profile](entity:Customer).
     * @param limit            The maximum number of results to return in a single paged response. This limit
     *                                    is advisory. The response might contain more or fewer results. The minimum
     *                                    value is 1 and the maximum value is 100. The default value is 20. For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                    basics/common-api-patterns/pagination).
     * @param cursor           The cursor returned in the paged response from the previous call to this
     *                                    endpoint. Provide this cursor to retrieve the next page of results for your
     *                                    original request. For more information, see [Pagination](https://developer.
     *                                    squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param withDefinitions  Indicates whether to return the [custom attribute definition](entity:
     *                                    CustomAttributeDefinition) in the `definition` field of each custom attribute.
     *                                    Set this parameter to `true` to get the name and description of each custom
     *                                    attribute, information about the data type, or other definition details. The
     *                                    default value is `false`.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.listCustomerCustomAttributes = function (customerId, limit, cursor, withDefinitions, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    withDefinitions: [withDefinitions, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.query('with_definitions', mapped.withDefinitions);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/customers/", "/custom-attributes"], ["/v2/customers/", "/custom-attributes"])), mapped.customerId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCustomerCustomAttributesResponse_1.listCustomerCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a [custom attribute]($m/CustomAttribute) associated with a customer profile.
     *
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId  The ID of the target [customer profile](entity:Customer).
     * @param key         The key of the custom attribute to delete. This key must match the `key` of a custom
     *                              attribute definition in the Square seller account. If the requesting application is
     *                              not the definition owner, you must use the qualified key.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.deleteCustomerCustomAttribute = function (customerId, key, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/customers/", "/custom-attributes/", ""], ["/v2/customers/", "/custom-attributes/", ""])), mapped.customerId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteCustomerCustomAttributeResponse_1.deleteCustomerCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a [custom attribute]($m/CustomAttribute) associated with a customer profile.
     *
     * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
     * in the same call.
     *
     * To retrieve a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom
     * attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId      The ID of the target [customer profile](entity:Customer).
     * @param key             The key of the custom attribute to retrieve. This key must match the `key` of a
     *                                   custom attribute definition in the Square seller account. If the requesting
     *                                   application is not the definition owner, you must use the qualified key.
     * @param withDefinition  Indicates whether to return the [custom attribute definition](entity:
     *                                   CustomAttributeDefinition) in the `definition` field of the custom attribute.
     *                                   Set this parameter to `true` to get the name and description of the custom
     *                                   attribute, information about the data type, or other definition details. The
     *                                   default value is `false`.
     * @param version         The current version of the custom attribute, which is used for strongly
     *                                   consistent reads to guarantee that you receive the most up-to-date data. When
     *                                   included in the request, Square returns the specified version or a higher
     *                                   version if one exists. If the specified version is higher than the current
     *                                   version, Square returns a `BAD_REQUEST` error.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.retrieveCustomerCustomAttribute = function (customerId, key, withDefinition, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()],
                    withDefinition: [withDefinition, (0, schema_1.optional)((0, schema_1.boolean)())],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('with_definition', mapped.withDefinition);
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/customers/", "/custom-attributes/", ""], ["/v2/customers/", "/custom-attributes/", ""])), mapped.customerId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCustomerCustomAttributeResponse_1.retrieveCustomerCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates or updates a [custom attribute]($m/CustomAttribute) for a customer profile.
     *
     * Use this endpoint to set the value of a custom attribute for a specified customer profile.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which
     * is created using the
     * [CreateCustomerCustomAttributeDefinition]($e/CustomerCustomAttributes/CreateCustomerCustomAttributeD
     * efinition) endpoint.
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param customerId   The ID of the target [customer profile](entity:
     *                                                                    Customer).
     * @param key          The key of the custom attribute to create or
     *                                                                    update. This key must match the `key` of a
     *                                                                    custom attribute definition in the Square
     *                                                                    seller account. If the requesting application
     *                                                                    is not the definition owner, you must use the
     *                                                                    qualified key.
     * @param body         An object containing the fields to POST for
     *                                                                    the request.  See the corresponding object
     *                                                                    definition for field details.
     * @return Response from the API call
     */
    CustomerCustomAttributesApi.prototype.upsertCustomerCustomAttribute = function (customerId, key, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    customerId: [customerId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()],
                    body: [body, upsertCustomerCustomAttributeRequest_1.upsertCustomerCustomAttributeRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/customers/", "/custom-attributes/", ""], ["/v2/customers/", "/custom-attributes/", ""])), mapped.customerId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(upsertCustomerCustomAttributeResponse_1.upsertCustomerCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    return CustomerCustomAttributesApi;
}(baseApi_1.BaseApi));
exports.CustomerCustomAttributesApi = CustomerCustomAttributesApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=customerCustomAttributesApi.js.map