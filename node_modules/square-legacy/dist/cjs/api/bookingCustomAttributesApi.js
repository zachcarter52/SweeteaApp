"use strict";
exports.__esModule = true;
exports.BookingCustomAttributesApi = void 0;
var tslib_1 = require("tslib");
var bulkDeleteBookingCustomAttributesRequest_1 = require("../models/bulkDeleteBookingCustomAttributesRequest");
var bulkDeleteBookingCustomAttributesResponse_1 = require("../models/bulkDeleteBookingCustomAttributesResponse");
var bulkUpsertBookingCustomAttributesRequest_1 = require("../models/bulkUpsertBookingCustomAttributesRequest");
var bulkUpsertBookingCustomAttributesResponse_1 = require("../models/bulkUpsertBookingCustomAttributesResponse");
var createBookingCustomAttributeDefinitionRequest_1 = require("../models/createBookingCustomAttributeDefinitionRequest");
var createBookingCustomAttributeDefinitionResponse_1 = require("../models/createBookingCustomAttributeDefinitionResponse");
var deleteBookingCustomAttributeDefinitionResponse_1 = require("../models/deleteBookingCustomAttributeDefinitionResponse");
var deleteBookingCustomAttributeResponse_1 = require("../models/deleteBookingCustomAttributeResponse");
var listBookingCustomAttributeDefinitionsResponse_1 = require("../models/listBookingCustomAttributeDefinitionsResponse");
var listBookingCustomAttributesResponse_1 = require("../models/listBookingCustomAttributesResponse");
var retrieveBookingCustomAttributeDefinitionResponse_1 = require("../models/retrieveBookingCustomAttributeDefinitionResponse");
var retrieveBookingCustomAttributeResponse_1 = require("../models/retrieveBookingCustomAttributeResponse");
var updateBookingCustomAttributeDefinitionRequest_1 = require("../models/updateBookingCustomAttributeDefinitionRequest");
var updateBookingCustomAttributeDefinitionResponse_1 = require("../models/updateBookingCustomAttributeDefinitionResponse");
var upsertBookingCustomAttributeRequest_1 = require("../models/upsertBookingCustomAttributeRequest");
var upsertBookingCustomAttributeResponse_1 = require("../models/upsertBookingCustomAttributeResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var BookingCustomAttributesApi = /** @class */ (function (_super) {
    tslib_1.__extends(BookingCustomAttributesApi, _super);
    function BookingCustomAttributesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get all bookings custom attribute definitions.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
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
    BookingCustomAttributesApi.prototype.listBookingCustomAttributeDefinitions = function (limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/bookings/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listBookingCustomAttributeDefinitionsResponse_1.listBookingCustomAttributeDefinitionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to
     *                                                                             POST for the request.  See the
     *                                                                             corresponding object definition for
     *                                                                             field details.
     * @return Response from the API call
     */
    BookingCustomAttributesApi.prototype.createBookingCustomAttributeDefinition = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/bookings/custom-attribute-definitions');
                mapped = req.prepareArgs({
                    body: [body, createBookingCustomAttributeDefinitionRequest_1.createBookingCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createBookingCustomAttributeDefinitionResponse_1.createBookingCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param key The key of the custom attribute definition to delete.
     * @return Response from the API call
     */
    BookingCustomAttributesApi.prototype.deleteBookingCustomAttributeDefinition = function (key, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({ key: [key, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/bookings/custom-attribute-definitions/", ""], ["/v2/bookings/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteBookingCustomAttributeDefinitionResponse_1.deleteBookingCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
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
    BookingCustomAttributesApi.prototype.retrieveBookingCustomAttributeDefinition = function (key, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/bookings/custom-attribute-definitions/", ""], ["/v2/bookings/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveBookingCustomAttributeDefinitionResponse_1.retrieveBookingCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a bookings custom attribute definition.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param key          The key of the custom attribute
     *                                                                             definition to update.
     * @param body         An object containing the fields to
     *                                                                             POST for the request.  See the
     *                                                                             corresponding object definition for
     *                                                                             field details.
     * @return Response from the API call
     */
    BookingCustomAttributesApi.prototype.updateBookingCustomAttributeDefinition = function (key, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    key: [key, (0, schema_1.string)()],
                    body: [body, updateBookingCustomAttributeDefinitionRequest_1.updateBookingCustomAttributeDefinitionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/bookings/custom-attribute-definitions/", ""], ["/v2/bookings/custom-attribute-definitions/", ""])), mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateBookingCustomAttributeDefinitionResponse_1.updateBookingCustomAttributeDefinitionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Bulk deletes bookings custom attributes.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to POST
     *                                                                        for the request.  See the corresponding
     *                                                                        object definition for field details.
     * @return Response from the API call
     */
    BookingCustomAttributesApi.prototype.bulkDeleteBookingCustomAttributes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/bookings/custom-attributes/bulk-delete');
                mapped = req.prepareArgs({
                    body: [body, bulkDeleteBookingCustomAttributesRequest_1.bulkDeleteBookingCustomAttributesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkDeleteBookingCustomAttributesResponse_1.bulkDeleteBookingCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Bulk upserts bookings custom attributes.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param body         An object containing the fields to POST
     *                                                                        for the request.  See the corresponding
     *                                                                        object definition for field details.
     * @return Response from the API call
     */
    BookingCustomAttributesApi.prototype.bulkUpsertBookingCustomAttributes = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/bookings/custom-attributes/bulk-upsert');
                mapped = req.prepareArgs({
                    body: [body, bulkUpsertBookingCustomAttributesRequest_1.bulkUpsertBookingCustomAttributesRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkUpsertBookingCustomAttributesResponse_1.bulkUpsertBookingCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists a booking's custom attributes.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param bookingId        The ID of the target [booking](entity:Booking).
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
    BookingCustomAttributesApi.prototype.listBookingCustomAttributes = function (bookingId, limit, cursor, withDefinitions, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    bookingId: [bookingId, (0, schema_1.string)()],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    withDefinitions: [withDefinitions, (0, schema_1.optional)((0, schema_1.boolean)())]
                });
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.query('with_definitions', mapped.withDefinitions);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/bookings/", "/custom-attributes"], ["/v2/bookings/", "/custom-attributes"])), mapped.bookingId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listBookingCustomAttributesResponse_1.listBookingCustomAttributesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a bookings custom attribute.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId  The ID of the target [booking](entity:Booking).
     * @param key        The key of the custom attribute to delete. This key must match the `key` of a custom
     *                             attribute definition in the Square seller account. If the requesting application is
     *                             not the definition owner, you must use the qualified key.
     * @return Response from the API call
     */
    BookingCustomAttributesApi.prototype.deleteBookingCustomAttribute = function (bookingId, key, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    bookingId: [bookingId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/bookings/", "/custom-attributes/", ""], ["/v2/bookings/", "/custom-attributes/", ""])), mapped.bookingId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteBookingCustomAttributeResponse_1.deleteBookingCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a bookings custom attribute.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and
     * `APPOINTMENTS_READ` for the OAuth scope.
     *
     * @param bookingId       The ID of the target [booking](entity:Booking).
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
    BookingCustomAttributesApi.prototype.retrieveBookingCustomAttribute = function (bookingId, key, withDefinition, version, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    bookingId: [bookingId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()],
                    withDefinition: [withDefinition, (0, schema_1.optional)((0, schema_1.boolean)())],
                    version: [version, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('with_definition', mapped.withDefinition);
                req.query('version', mapped.version);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/bookings/", "/custom-attributes/", ""], ["/v2/bookings/", "/custom-attributes/", ""])), mapped.bookingId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveBookingCustomAttributeResponse_1.retrieveBookingCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Upserts a bookings custom attribute.
     *
     * To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
     * To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and
     * `APPOINTMENTS_WRITE` for the OAuth scope.
     *
     * For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed
     * to *Appointments Plus*
     * or *Appointments Premium*.
     *
     * @param bookingId    The ID of the target [booking](entity:Booking).
     * @param key          The key of the custom attribute to create or
     *                                                                   update. This key must match the `key` of a
     *                                                                   custom attribute definition in the Square seller
     *                                                                   account. If the requesting application is not
     *                                                                   the definition owner, you must use the qualified
     *                                                                   key.
     * @param body         An object containing the fields to POST for the
     *                                                                   request.  See the corresponding object
     *                                                                   definition for field details.
     * @return Response from the API call
     */
    BookingCustomAttributesApi.prototype.upsertBookingCustomAttribute = function (bookingId, key, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    bookingId: [bookingId, (0, schema_1.string)()],
                    key: [key, (0, schema_1.string)()],
                    body: [body, upsertBookingCustomAttributeRequest_1.upsertBookingCustomAttributeRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/bookings/", "/custom-attributes/", ""], ["/v2/bookings/", "/custom-attributes/", ""])), mapped.bookingId, mapped.key);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(upsertBookingCustomAttributeResponse_1.upsertBookingCustomAttributeResponseSchema, requestOptions)];
            });
        });
    };
    return BookingCustomAttributesApi;
}(baseApi_1.BaseApi));
exports.BookingCustomAttributesApi = BookingCustomAttributesApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=bookingCustomAttributesApi.js.map