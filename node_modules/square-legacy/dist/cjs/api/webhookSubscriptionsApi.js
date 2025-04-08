"use strict";
exports.__esModule = true;
exports.WebhookSubscriptionsApi = void 0;
var tslib_1 = require("tslib");
var createWebhookSubscriptionRequest_1 = require("../models/createWebhookSubscriptionRequest");
var createWebhookSubscriptionResponse_1 = require("../models/createWebhookSubscriptionResponse");
var deleteWebhookSubscriptionResponse_1 = require("../models/deleteWebhookSubscriptionResponse");
var listWebhookEventTypesResponse_1 = require("../models/listWebhookEventTypesResponse");
var listWebhookSubscriptionsResponse_1 = require("../models/listWebhookSubscriptionsResponse");
var retrieveWebhookSubscriptionResponse_1 = require("../models/retrieveWebhookSubscriptionResponse");
var testWebhookSubscriptionRequest_1 = require("../models/testWebhookSubscriptionRequest");
var testWebhookSubscriptionResponse_1 = require("../models/testWebhookSubscriptionResponse");
var updateWebhookSubscriptionRequest_1 = require("../models/updateWebhookSubscriptionRequest");
var updateWebhookSubscriptionResponse_1 = require("../models/updateWebhookSubscriptionResponse");
var updateWebhookSubscriptionSignatureKeyRequest_1 = require("../models/updateWebhookSubscriptionSignatureKeyRequest");
var updateWebhookSubscriptionSignatureKeyResponse_1 = require("../models/updateWebhookSubscriptionSignatureKeyResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var WebhookSubscriptionsApi = /** @class */ (function (_super) {
    tslib_1.__extends(WebhookSubscriptionsApi, _super);
    function WebhookSubscriptionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists all webhook event types that can be subscribed to.
     *
     * @param apiVersion  The API version for which to list event types. Setting this field overrides the
     *                              default version used by the application.
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.listWebhookEventTypes = function (apiVersion, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/webhooks/event-types');
                mapped = req.prepareArgs({
                    apiVersion: [apiVersion, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('api_version', mapped.apiVersion);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listWebhookEventTypesResponse_1.listWebhookEventTypesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists all webhook subscriptions owned by your application.
     *
     * @param cursor           A pagination cursor returned by a previous call to this endpoint. Provide this
     *                                    to retrieve the next set of results for your original query.  For more
     *                                    information, see [Pagination](https://developer.squareup.com/docs/build-
     *                                    basics/common-api-patterns/pagination).
     * @param includeDisabled  Includes disabled [Subscription](entity:WebhookSubscription)s. By default, all
     *                                    enabled [Subscription](entity:WebhookSubscription)s are returned.
     * @param sortOrder        Sorts the returned list by when the [Subscription](entity:WebhookSubscription)
     *                                    was created with the specified order. This field defaults to ASC.
     * @param limit            The maximum number of results to be returned in a single page. It is possible
     *                                    to receive fewer results than the specified limit on a given page. The default
     *                                    value of 100 is also the maximum allowed value.  Default: 100
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.listWebhookSubscriptions = function (cursor, includeDisabled, sortOrder, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/webhooks/subscriptions');
                mapped = req.prepareArgs({
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    includeDisabled: [includeDisabled, (0, schema_1.optional)((0, schema_1.boolean)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('include_disabled', mapped.includeDisabled);
                req.query('sort_order', mapped.sortOrder);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listWebhookSubscriptionsResponse_1.listWebhookSubscriptionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a webhook subscription.
     *
     * @param body         An object containing the fields to POST for the
     *                                                                request.  See the corresponding object definition
     *                                                                for field details.
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.createWebhookSubscription = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/webhooks/subscriptions');
                mapped = req.prepareArgs({
                    body: [body, createWebhookSubscriptionRequest_1.createWebhookSubscriptionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createWebhookSubscriptionResponse_1.createWebhookSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a webhook subscription.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to delete.
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.deleteWebhookSubscription = function (subscriptionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/webhooks/subscriptions/", ""], ["/v2/webhooks/subscriptions/", ""])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteWebhookSubscriptionResponse_1.deleteWebhookSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a webhook subscription identified by its ID.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to retrieve.
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.retrieveWebhookSubscription = function (subscriptionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/webhooks/subscriptions/", ""], ["/v2/webhooks/subscriptions/", ""])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveWebhookSubscriptionResponse_1.retrieveWebhookSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a webhook subscription.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:
     *                                                                   WebhookSubscription) to update.
     * @param body            An object containing the fields to POST for the
     *                                                                   request.  See the corresponding object
     *                                                                   definition for field details.
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.updateWebhookSubscription = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, updateWebhookSubscriptionRequest_1.updateWebhookSubscriptionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/webhooks/subscriptions/", ""], ["/v2/webhooks/subscriptions/", ""])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateWebhookSubscriptionResponse_1.updateWebhookSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a webhook subscription by replacing the existing signature key with a new one.
     *
     * @param subscriptionId  [REQUIRED] The ID of the
     *                                                                               [Subscription](entity:
     *                                                                               WebhookSubscription) to update.
     * @param body            An object containing the fields to
     *                                                                               POST for the request.  See the
     *                                                                               corresponding object definition for
     *                                                                               field details.
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.updateWebhookSubscriptionSignatureKey = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, updateWebhookSubscriptionSignatureKeyRequest_1.updateWebhookSubscriptionSignatureKeyRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/webhooks/subscriptions/", "/signature-key"], ["/v2/webhooks/subscriptions/", "/signature-key"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateWebhookSubscriptionSignatureKeyResponse_1.updateWebhookSubscriptionSignatureKeyResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Tests a webhook subscription by sending a test event to the notification URL.
     *
     * @param subscriptionId  [REQUIRED] The ID of the [Subscription](entity:
     *                                                                 WebhookSubscription) to test.
     * @param body            An object containing the fields to POST for the
     *                                                                 request.  See the corresponding object definition
     *                                                                 for field details.
     * @return Response from the API call
     */
    WebhookSubscriptionsApi.prototype.testWebhookSubscription = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, testWebhookSubscriptionRequest_1.testWebhookSubscriptionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/webhooks/subscriptions/", "/test"], ["/v2/webhooks/subscriptions/", "/test"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(testWebhookSubscriptionResponse_1.testWebhookSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    return WebhookSubscriptionsApi;
}(baseApi_1.BaseApi));
exports.WebhookSubscriptionsApi = WebhookSubscriptionsApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=webhookSubscriptionsApi.js.map