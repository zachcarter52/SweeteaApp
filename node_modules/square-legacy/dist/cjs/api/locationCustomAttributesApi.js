"use strict";
exports.__esModule = true;
exports.LocationCustomAttributesApi = void 0;
var tslib_1 = require("tslib");
var bulkDeleteLocationCustomAttributesRequest_1 = require("../models/bulkDeleteLocationCustomAttributesRequest");
var bulkDeleteLocationCustomAttributesResponse_1 = require("../models/bulkDeleteLocationCustomAttributesResponse");
var bulkUpsertLocationCustomAttributesRequest_1 = require("../models/bulkUpsertLocationCustomAttributesRequest");
var bulkUpsertLocationCustomAttributesResponse_1 = require("../models/bulkUpsertLocationCustomAttributesResponse");
var createLocationCustomAttributeDefinitionRequest_1 = require("../models/createLocationCustomAttributeDefinitionRequest");
var createLocationCustomAttributeDefinitionResponse_1 = require("../models/createLocationCustomAttributeDefinitionResponse");
var deleteLocationCustomAttributeDefinitionResponse_1 = require("../models/deleteLocationCustomAttributeDefinitionResponse");
var deleteLocationCustomAttributeResponse_1 = require("../models/deleteLocationCustomAttributeResponse");
var listLocationCustomAttributeDefinitionsResponse_1 = require("../models/listLocationCustomAttributeDefinitionsResponse");
var listLocationCustomAttributesResponse_1 = require("../models/listLocationCustomAttributesResponse");
var retrieveLocationCustomAttributeDefinitionResponse_1 = require("../models/retrieveLocationCustomAttributeDefinitionResponse");
var retrieveLocationCustomAttributeResponse_1 = require("../models/retrieveLocationCustomAttributeResponse");
var updateLocationCustomAttributeDefinitionRequest_1 = require("../models/updateLocationCustomAttributeDefinitionRequest");
var updateLocationCustomAttributeDefinitionResponse_1 = require("../models/updateLocationCustomAttributeDefinitionResponse");
var upsertLocationCustomAttributeRequest_1 = require("../models/upsertLocationCustomAttributeRequest");
var upsertLocationCustomAttributeResponse_1 = require("../models/upsertLocationCustomAttributeResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var LocationCustomAttributesApi = /** @class */ (function (_super) {
    tslib_1.__extends(LocationCustomAttributesApi, _super);
    function LocationCustomAttributesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists the location-related [custom attribute definitions]($m/CustomAttributeDefinition) that belong
     * to a Square seller account.
     * When all response pages are retrieved, the results include all custom attribute definitions
     * that are visible to the requesting application, including those that are created by other
     * applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param visibilityFilter  Filters the `CustomAttributeDefinition` results by their `visibility` values.
     * @param limit             The maximum number of results to return in a single paged response. This limit
     *                                    is advisory. The response might contain more or fewer results. The minimum
     *                                    value is 1 and the maximum value is 100. The default value is 20. For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                    basics/common-api-patterns/pagination).
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                    endpoint. Provide this cursor to retrieve the next page of results for your
     *                                    original request. For more information, see [Pagination](https://developer.
     *                                    squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.listLocationCustomAttributeDefinitions = function (visibilityFilter, limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/locations/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    visibilityFilter: [visibilityFilter, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('visibility_filter', mapped.visibilityFilter);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listLocationCustomAttributeDefinitionsResponse_1.listLocationCustomAttributeDefinitionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a location-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     * Use this endpoint to define a custom attribute that can be associated with locations.
     * A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
     * for a custom attribute. After the definition is created, you can call
     * [UpsertLocationCustomAttribute]($e/LocationCustomAttributes/UpsertLocationCustomAttribute) or
     * [BulkUpsertLocationCustomAttributes]($e/LocationCustomAttributes/BulkUpsertLocationCustomAttributes)
     * to set the custom attribute for locations.
     *
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.createLocationCustomAttributeDefinition = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/locations/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    body: [body, createLocationCustomAttributeDefinitionRequest_1.createLocationCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createLocationCustomAttributeDefinitionResponse_1.createLocationCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a location-related [custom attribute definition]($m/CustomAttributeDefinition) from a Square
     * seller account.
     * Deleting a custom attribute definition also deletes the corresponding custom attribute from
     * all locations.
     * Only the definition owner can delete a custom attribute definition.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.deleteLocationCustomAttributeDefinition = function (key, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ key: [key, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/locations/custom-attribute-definitions/", ""], ["/v2/locations/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteLocationCustomAttributeDefinitionResponse_1.deleteLocationCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a location-related [custom attribute definition]($m/CustomAttributeDefinition) from a
     * Square seller account.
     * To retrieve a custom attribute definition created by another application, the `visibility`
     * setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
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
    LocationCustomAttributesApi.prototype.retrieveLocationCustomAttributeDefinition = function (key, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/locations/custom-attribute-definitions/", ""], ["/v2/locations/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLocationCustomAttributeDefinitionResponse_1.retrieveLocationCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a location-related [custom attribute definition]($m/CustomAttributeDefinition) for a Square
     * seller account.
     * Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
     * `schema` for a `Selection` data type.
     * Only the definition owner can update a custom attribute definition.
     *
     * @param key          The key of the custom attribute
     *                                                                              definition to update.
     * @param body         An object containing the fields to
     *                                                                              POST for the request.  See the
     *                                                                              corresponding object definition for
     *                                                                              field details.
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.updateLocationCustomAttributeDefinition = function (key, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    body: [body, updateLocationCustomAttributeDefinitionRequest_1.updateLocationCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/locations/custom-attribute-definitions/", ""], ["/v2/locations/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateLocationCustomAttributeDefinitionResponse_1.updateLocationCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes [custom attributes]($m/CustomAttribute) for locations as a bulk operation.
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.bulkDeleteLocationCustomAttributes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/locations/custom-attributes/bulk-delete');
                mapped = req.prepareArgs({
                    body: [body, bulkDeleteLocationCustomAttributesRequest_1.bulkDeleteLocationCustomAttributesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkDeleteLocationCustomAttributesResponse_1.bulkDeleteLocationCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates or updates [custom attributes]($m/CustomAttribute) for locations as a bulk operation.
     * Use this endpoint to set the value of one or more custom attributes for one or more locations.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which is
     * created using the
     * [CreateLocationCustomAttributeDefinition]($e/LocationCustomAttributes/CreateLocationCustomAttributeD
     * efinition) endpoint.
     * This `BulkUpsertLocationCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
     * requests and returns a map of individual upsert responses. Each upsert request has a unique ID
     * and provides a location ID and custom attribute. Each upsert response is returned with the ID
     * of the corresponding request.
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param body         An object containing the fields to POST
     *                                                                         for the request.  See the corresponding
     *                                                                         object definition for field details.
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.bulkUpsertLocationCustomAttributes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/locations/custom-attributes/bulk-upsert');
                mapped = req.prepareArgs({
                    body: [body, bulkUpsertLocationCustomAttributesRequest_1.bulkUpsertLocationCustomAttributesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkUpsertLocationCustomAttributesResponse_1.bulkUpsertLocationCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists the [custom attributes]($m/CustomAttribute) associated with a location.
     * You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
     * in the same call.
     * When all response pages are retrieved, the results include all custom attributes that are
     * visible to the requesting application, including those that are owned by other applications
     * and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param locationId        The ID of the target [location](entity:Location).
     * @param visibilityFilter  Filters the `CustomAttributeDefinition` results by their `visibility` values.
     * @param limit             The maximum number of results to return in a single paged response. This
     *                                     limit is advisory. The response might contain more or fewer results. The
     *                                     minimum value is 1 and the maximum value is 100. The default value is 20. For
     *                                     more information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                     basics/common-api-patterns/pagination).
     * @param cursor            The cursor returned in the paged response from the previous call to this
     *                                     endpoint. Provide this cursor to retrieve the next page of results for your
     *                                     original request. For more information, see [Pagination](https://developer.
     *                                     squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param withDefinitions   Indicates whether to return the [custom attribute definition](entity:
     *                                     CustomAttributeDefinition) in the `definition` field of each custom attribute.
     *                                     Set this parameter to `true` to get the name and description of each custom
     *                                     attribute, information about the data type, or other definition details. The
     *                                     default value is `false`.
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.listLocationCustomAttributes = function (locationId, visibilityFilter, limit, cursor, withDefinitions, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    visibilityFilter: [visibilityFilter, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    withDefinitions: [withDefinitions, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('visibility_filter', mapped.visibilityFilter);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.query('with_definitions', mapped.withDefinitions);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/locations/", "/custom-attributes"], ["/v2/locations/", "/custom-attributes"])), mapped.locationId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listLocationCustomAttributesResponse_1.listLocationCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a [custom attribute]($m/CustomAttribute) associated with a location.
     * To delete a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param locationId  The ID of the target [location](entity:Location).
     * @param key         The key of the custom attribute to delete. This key must match the `key` of a custom
     *                              attribute definition in the Square seller account. If the requesting application is
     *                              not the definition owner, you must use the qualified key.
     * @return Response from the API call
     */
    LocationCustomAttributesApi.prototype.deleteLocationCustomAttribute = function (locationId, key, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/locations/", "/custom-attributes/", ""], ["/v2/locations/", "/custom-attributes/", ""])), mapped.locationId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteLocationCustomAttributeResponse_1.deleteLocationCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a [custom attribute]($m/CustomAttribute) associated with a location.
     * You can use the `with_definition` query parameter to also retrieve the custom attribute definition
     * in the same call.
     * To retrieve a custom attribute owned by another application, the `visibility` setting must be
     * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param locationId      The ID of the target [location](entity:Location).
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
    LocationCustomAttributesApi.prototype.retrieveLocationCustomAttribute = function (locationId, key, withDefinition, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()],
                    withDefinition: [withDefinition, (0, schema_1.optional)((0, schema_1.boolean)())],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('with_definition', mapped.withDefinition);
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/locations/", "/custom-attributes/", ""], ["/v2/locations/", "/custom-attributes/", ""])), mapped.locationId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveLocationCustomAttributeResponse_1.retrieveLocationCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates or updates a [custom attribute]($m/CustomAttribute) for a location.
     * Use this endpoint to set the value of a custom attribute for a specified location.
     * A custom attribute is based on a custom attribute definition in a Square seller account, which
     * is created using the
     * [CreateLocationCustomAttributeDefinition]($e/LocationCustomAttributes/CreateLocationCustomAttributeD
     * efinition) endpoint.
     * To create or update a custom attribute owned by another application, the `visibility` setting
     * must be `VISIBILITY_READ_WRITE_VALUES`.
     *
     * @param locationId   The ID of the target [location](entity:
     *                                                                    Location).
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
    LocationCustomAttributesApi.prototype.upsertLocationCustomAttribute = function (locationId, key, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()],
                    body: [body, upsertLocationCustomAttributeRequest_1.upsertLocationCustomAttributeRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/locations/", "/custom-attributes/", ""], ["/v2/locations/", "/custom-attributes/", ""])), mapped.locationId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(upsertLocationCustomAttributeResponse_1.upsertLocationCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    return LocationCustomAttributesApi;
}(baseApi_1.BaseApi));
exports.LocationCustomAttributesApi = LocationCustomAttributesApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=locationCustomAttributesApi.js.map