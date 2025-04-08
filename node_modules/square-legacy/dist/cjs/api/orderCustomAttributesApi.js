"use strict";
exports.__esModule = true;
exports.OrderCustomAttributesApi = void 0;
var tslib_1 = require("tslib");
var bulkDeleteOrderCustomAttributesRequest_1 = require("../models/bulkDeleteOrderCustomAttributesRequest");
var bulkDeleteOrderCustomAttributesResponse_1 = require("../models/bulkDeleteOrderCustomAttributesResponse");
var bulkUpsertOrderCustomAttributesRequest_1 = require("../models/bulkUpsertOrderCustomAttributesRequest");
var bulkUpsertOrderCustomAttributesResponse_1 = require("../models/bulkUpsertOrderCustomAttributesResponse");
var createOrderCustomAttributeDefinitionRequest_1 = require("../models/createOrderCustomAttributeDefinitionRequest");
var createOrderCustomAttributeDefinitionResponse_1 = require("../models/createOrderCustomAttributeDefinitionResponse");
var deleteOrderCustomAttributeDefinitionResponse_1 = require("../models/deleteOrderCustomAttributeDefinitionResponse");
var deleteOrderCustomAttributeResponse_1 = require("../models/deleteOrderCustomAttributeResponse");
var listOrderCustomAttributeDefinitionsResponse_1 = require("../models/listOrderCustomAttributeDefinitionsResponse");
var listOrderCustomAttributesResponse_1 = require("../models/listOrderCustomAttributesResponse");
var retrieveOrderCustomAttributeDefinitionResponse_1 = require("../models/retrieveOrderCustomAttributeDefinitionResponse");
var retrieveOrderCustomAttributeResponse_1 = require("../models/retrieveOrderCustomAttributeResponse");
var updateOrderCustomAttributeDefinitionRequest_1 = require("../models/updateOrderCustomAttributeDefinitionRequest");
var updateOrderCustomAttributeDefinitionResponse_1 = require("../models/updateOrderCustomAttributeDefinitionResponse");
var upsertOrderCustomAttributeRequest_1 = require("../models/upsertOrderCustomAttributeRequest");
var upsertOrderCustomAttributeResponse_1 = require("../models/upsertOrderCustomAttributeResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var OrderCustomAttributesApi = /** @class */ (function (_super) {
    tslib_1.__extends(OrderCustomAttributesApi, _super);
    function OrderCustomAttributesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists the order-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong to
     * a Square seller account.
     *
     * When all response pages are retrieved, the results include all custom attribute definitions
     * that are visible to the requesting application, including those that are created by other
     * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
     * seller-defined custom attributes (also known as custom fields) are always set to
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param visibilityFilter  Requests that all of the custom attributes be returned, or only those that are
     *                                    read-only or read-write.
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                    endpoint.  Provide this cursor to retrieve the next page of results for your
     *                                    original request.  For more information, see [Pagination](https://developer.
     *                                    squareup.com/docs/working-with-apis/pagination).
     * @param limit             The maximum number of results to return in a single paged response. This limit
     *                                    is advisory.  The response might contain more or fewer results. The minimum
     *                                    value is 1 and the maximum value is 100.  The default value is 20. For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/working-with-
     *                                    apis/pagination).
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.listOrderCustomAttributeDefinitions = function (visibilityFilter, cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/orders/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    visibilityFilter: [visibilityFilter, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('visibility_filter', mapped.visibilityFilter);
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listOrderCustomAttributeDefinitionsResponse_1.listOrderCustomAttributeDefinitionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates an order-related custom attribute definition.  Use this endpoint to
     * define a custom attribute that can be associated with orders.
     *
     * After creating a custom attribute definition, you can set the custom attribute for orders
     * in the Square seller account.
     *
     * @param body         An object containing the fields to POST
     *                                                                           for the request.  See the corresponding
     *                                                                           object definition for field details.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.createOrderCustomAttributeDefinition = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    body: [body, createOrderCustomAttributeDefinitionRequest_1.createOrderCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createOrderCustomAttributeDefinitionResponse_1.createOrderCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes an order-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     *
     * Only the definition owner can delete a custom attribute definition.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.deleteOrderCustomAttributeDefinition = function (key, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ key: [key, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/orders/custom-attribute-definitions/", ""], ["/v2/orders/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteOrderCustomAttributeDefinitionResponse_1.deleteOrderCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves an order-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     *
     * To retrieve a custom attribute definition created by another application, the `visibility`
     * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined
     * custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param key     The key of the custom attribute definition to retrieve.
     * @param version To enable [optimistic concurrency](https://developer.squareup.com/docs/build-
     *                          basics/common-api-patterns/optimistic-concurrency) control, include this optional field
     *                          and specify the current version of the custom attribute.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.retrieveOrderCustomAttributeDefinition = function (key, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/orders/custom-attribute-definitions/", ""], ["/v2/orders/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveOrderCustomAttributeDefinitionResponse_1.retrieveOrderCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates an order-related custom attribute definition for a Square seller account.
     *
     * Only the definition owner can update a custom attribute definition. Note that sellers can view all
     * custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.
     *
     * @param key          The key of the custom attribute
     *                                                                           definition to update.
     * @param body         An object containing the fields to POST
     *                                                                           for the request.  See the corresponding
     *                                                                           object definition for field details.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.updateOrderCustomAttributeDefinition = function (key, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    body: [body, updateOrderCustomAttributeDefinitionRequest_1.updateOrderCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/orders/custom-attribute-definitions/", ""], ["/v2/orders/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateOrderCustomAttributeDefinitionResponse_1.updateOrderCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes order [custom attributes]($m/CustomAttribute) as a bulk operation.
     *
     * Use this endpoint to delete one or more custom attributes from one or more orders.
     * A custom attribute is based on a custom attribute definition in a Square seller account.  (To create
     * a
     * custom attribute definition, use the
     * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
     * ) endpoint.)
     *
     * This `BulkDeleteOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual delete
     * requests and returns a map of individual delete responses. Each delete request has a unique ID
     * and provides an order ID and custom attribute. Each delete response is returned with the ID
     * of the corresponding request.
     *
     * To delete a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST for
     *                                                                      the request.  See the corresponding object
     *                                                                      definition for field details.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.bulkDeleteOrderCustomAttributes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders/custom-attributes/bulk-delete');
                mapped = req.prepareArgs({
                    body: [body, bulkDeleteOrderCustomAttributesRequest_1.bulkDeleteOrderCustomAttributesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkDeleteOrderCustomAttributesResponse_1.bulkDeleteOrderCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates or updates order [custom attributes]($m/CustomAttribute) as a bulk operation.
     *
     * Use this endpoint to delete one or more custom attributes from one or more orders.
     * A custom attribute is based on a custom attribute definition in a Square seller account.  (To create
     * a
     * custom attribute definition, use the
     * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
     * ) endpoint.)
     *
     * This `BulkUpsertOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
     * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
     * and provides an order ID and custom attribute. Each upsert response is returned with the ID
     * of the corresponding request.
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST for
     *                                                                      the request.  See the corresponding object
     *                                                                      definition for field details.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.bulkUpsertOrderCustomAttributes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders/custom-attributes/bulk-upsert');
                mapped = req.prepareArgs({
                    body: [body, bulkUpsertOrderCustomAttributesRequest_1.bulkUpsertOrderCustomAttributesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkUpsertOrderCustomAttributesResponse_1.bulkUpsertOrderCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists the [custom attributes]($m/CustomAttribute) associated with an order.
     *
     * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
     * in the same call.
     *
     * When all response pages are retrieved, the results include all custom attributes that are
     * visible to the requesting application, including those that are owned by other applications
     * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param orderId           The ID of the target [order](entity:Order).
     * @param visibilityFilter  Requests that all of the custom attributes be returned, or only those that
     *                                     are read-only or read-write.
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                     endpoint.  Provide this cursor to retrieve the next page of results for your
     *                                     original request.  For more information, see [Pagination](https://developer.
     *                                     squareup.com/docs/working-with-apis/pagination).
     * @param limit             The maximum number of results to return in a single paged response. This
     *                                     limit is advisory.  The response might contain more or fewer results. The
     *                                     minimum value is 1 and the maximum value is 100.  The default value is 20. For
     *                                     more information, see [Pagination](https://developer.squareup.com/docs/working-
     *                                     with-apis/pagination).
     * @param withDefinitions   Indicates whether to return the [custom attribute definition](entity:
     *                                     CustomAttributeDefinition) in the `definition` field of each custom attribute.
     *                                     Set this parameter to `true` to get the name and description of each custom
     *                                     attribute,  information about the data type, or other definition details. The
     *                                     default value is `false`.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.listOrderCustomAttributes = function (orderId, visibilityFilter, cursor, limit, withDefinitions, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    orderId: [orderId, (0, schema_1.string)()],
                    visibilityFilter: [visibilityFilter, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    withDefinitions: [withDefinitions, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('visibility_filter', mapped.visibilityFilter);
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.query('with_definitions', mapped.withDefinitions);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/orders/", "/custom-attributes"], ["/v2/orders/", "/custom-attributes"])), mapped.orderId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listOrderCustomAttributesResponse_1.listOrderCustomAttributesResponseSchema, requestOptions)];
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
     * @param orderId              The ID of the target [order](entity:Order).
     * @param customAttributeKey   The key of the custom attribute to delete.  This key must match the key of
     *                                       an existing custom attribute definition.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.deleteOrderCustomAttribute = function (orderId, customAttributeKey, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    orderId: [orderId, (0, schema_1.string)()],
                    customAttributeKey: [customAttributeKey, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/orders/", "/custom-attributes/", ""], ["/v2/orders/", "/custom-attributes/", ""])), mapped.orderId, mapped.customAttributeKey);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteOrderCustomAttributeResponse_1.deleteOrderCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a [custom attribute]($m/CustomAttribute) associated with an order.
     *
     * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
     * in the same call.
     *
     * To retrieve a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom
     * attributes
     * also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param orderId              The ID of the target [order](entity:Order).
     * @param customAttributeKey   The key of the custom attribute to retrieve.  This key must match the key
     *                                        of an existing custom attribute definition.
     * @param version              To enable [optimistic concurrency](https://developer.squareup.
     *                                        com/docs/build-basics/common-api-patterns/optimistic-concurrency) control,
     *                                        include this optional field and specify the current version of the custom
     *                                        attribute.
     * @param withDefinition       Indicates whether to return the [custom attribute definition](entity:
     *                                        CustomAttributeDefinition) in the `definition` field of each  custom
     *                                        attribute. Set this parameter to `true` to get the name and description of
     *                                        each custom attribute,  information about the data type, or other
     *                                        definition details. The default value is `false`.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.retrieveOrderCustomAttribute = function (orderId, customAttributeKey, version, withDefinition, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    orderId: [orderId, (0, schema_1.string)()],
                    customAttributeKey: [customAttributeKey, (0, schema_1.string)()],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())],
                    withDefinition: [withDefinition, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('version', mapped.version);
                req.query('with_definition', mapped.withDefinition);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/orders/", "/custom-attributes/", ""], ["/v2/orders/", "/custom-attributes/", ""])), mapped.orderId, mapped.customAttributeKey);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveOrderCustomAttributeResponse_1.retrieveOrderCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates or updates a [custom attribute]($m/CustomAttribute) for an order.
     *
     * Use this endpoint to set the value of a custom attribute for a specific order.
     * A custom attribute is based on a custom attribute definition in a Square seller account. (To create
     * a
     * custom attribute definition, use the
     * [CreateOrderCustomAttributeDefinition]($e/OrderCustomAttributes/CreateOrderCustomAttributeDefinition
     * ) endpoint.)
     *
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
     * (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param orderId              The ID of the target [order](entity:
     *                                                                         Order).
     * @param customAttributeKey   The key of the custom attribute to create
     *                                                                         or update.  This key must match the key
     *                                                                         of an existing custom attribute definition.
     * @param body                 An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    OrderCustomAttributesApi.prototype.upsertOrderCustomAttribute = function (orderId, customAttributeKey, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    orderId: [orderId, (0, schema_1.string)()],
                    customAttributeKey: [customAttributeKey, (0, schema_1.string)()],
                    body: [body, upsertOrderCustomAttributeRequest_1.upsertOrderCustomAttributeRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/orders/", "/custom-attributes/", ""], ["/v2/orders/", "/custom-attributes/", ""])), mapped.orderId, mapped.customAttributeKey);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(upsertOrderCustomAttributeResponse_1.upsertOrderCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    return OrderCustomAttributesApi;
}(baseApi_1.BaseApi));
exports.OrderCustomAttributesApi = OrderCustomAttributesApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=orderCustomAttributesApi.js.map