"use strict";
exports.__esModule = true;
exports.SubscriptionsApi = void 0;
var tslib_1 = require("tslib");
var bulkSwapPlanRequest_1 = require("../models/bulkSwapPlanRequest");
var bulkSwapPlanResponse_1 = require("../models/bulkSwapPlanResponse");
var cancelSubscriptionResponse_1 = require("../models/cancelSubscriptionResponse");
var changeBillingAnchorDateRequest_1 = require("../models/changeBillingAnchorDateRequest");
var changeBillingAnchorDateResponse_1 = require("../models/changeBillingAnchorDateResponse");
var createSubscriptionRequest_1 = require("../models/createSubscriptionRequest");
var createSubscriptionResponse_1 = require("../models/createSubscriptionResponse");
var deleteSubscriptionActionResponse_1 = require("../models/deleteSubscriptionActionResponse");
var listSubscriptionEventsResponse_1 = require("../models/listSubscriptionEventsResponse");
var pauseSubscriptionRequest_1 = require("../models/pauseSubscriptionRequest");
var pauseSubscriptionResponse_1 = require("../models/pauseSubscriptionResponse");
var resumeSubscriptionRequest_1 = require("../models/resumeSubscriptionRequest");
var resumeSubscriptionResponse_1 = require("../models/resumeSubscriptionResponse");
var retrieveSubscriptionResponse_1 = require("../models/retrieveSubscriptionResponse");
var searchSubscriptionsRequest_1 = require("../models/searchSubscriptionsRequest");
var searchSubscriptionsResponse_1 = require("../models/searchSubscriptionsResponse");
var swapPlanRequest_1 = require("../models/swapPlanRequest");
var swapPlanResponse_1 = require("../models/swapPlanResponse");
var updateSubscriptionRequest_1 = require("../models/updateSubscriptionRequest");
var updateSubscriptionResponse_1 = require("../models/updateSubscriptionResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var SubscriptionsApi = /** @class */ (function (_super) {
    tslib_1.__extends(SubscriptionsApi, _super);
    function SubscriptionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enrolls a customer in a subscription.
     *
     * If you provide a card on file in the request, Square charges the card for
     * the subscription. Otherwise, Square sends an invoice to the customer's email
     * address. The subscription starts immediately, unless the request includes
     * the optional `start_date`. Each individual subscription is associated with a particular location.
     *
     * For more information, see [Create a subscription](https://developer.squareup.com/docs/subscriptions-
     * api/manage-subscriptions#create-a-subscription).
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.createSubscription = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/subscriptions');
                mapped = req.prepareArgs({
                    body: [body, createSubscriptionRequest_1.createSubscriptionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createSubscriptionResponse_1.createSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Schedules a plan variation change for all active subscriptions under a given plan
     * variation. For more information, see [Swap Subscription Plan Variations](https://developer.squareup.
     * com/docs/subscriptions-api/swap-plan-variations).
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.bulkSwapPlan = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/subscriptions/bulk-swap-plan');
                mapped = req.prepareArgs({ body: [body, bulkSwapPlanRequest_1.bulkSwapPlanRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(bulkSwapPlanResponse_1.bulkSwapPlanResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Searches for subscriptions.
     *
     * Results are ordered chronologically by subscription creation date. If
     * the request specifies more than one location ID,
     * the endpoint orders the result
     * by location ID, and then by creation date within each location. If no locations are given
     * in the query, all locations are searched.
     *
     * You can also optionally specify `customer_ids` to search by customer.
     * If left unset, all customers
     * associated with the specified locations are returned.
     * If the request specifies customer IDs, the endpoint orders results
     * first by location, within location by customer ID, and within
     * customer by subscription creation date.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.searchSubscriptions = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/subscriptions/search');
                mapped = req.prepareArgs({
                    body: [body, searchSubscriptionsRequest_1.searchSubscriptionsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchSubscriptionsResponse_1.searchSubscriptionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a specific subscription.
     *
     * @param subscriptionId  The ID of the subscription to retrieve.
     * @param include         A query parameter to specify related information to be included in the response.
     *                                  The supported query parameter values are:   - `actions`: to include scheduled
     *                                  actions on the targeted subscription.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.retrieveSubscription = function (subscriptionId, include, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    include: [include, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('include', mapped.include);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", ""], ["/v2/subscriptions/", ""])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveSubscriptionResponse_1.retrieveSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a subscription by modifying or clearing `subscription` field values.
     * To clear a field, set its value to `null`.
     *
     * @param subscriptionId  The ID of the subscription to update.
     * @param body            An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.updateSubscription = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, updateSubscriptionRequest_1.updateSubscriptionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", ""], ["/v2/subscriptions/", ""])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateSubscriptionResponse_1.updateSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Deletes a scheduled action for a subscription.
     *
     * @param subscriptionId  The ID of the subscription the targeted action is to act upon.
     * @param actionId        The ID of the targeted action to be deleted.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.deleteSubscriptionAction = function (subscriptionId, actionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('DELETE');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    actionId: [actionId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", "/actions/", ""], ["/v2/subscriptions/", "/actions/", ""])), mapped.subscriptionId, mapped.actionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(deleteSubscriptionActionResponse_1.deleteSubscriptionActionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Changes the [billing anchor date](https://developer.squareup.com/docs/subscriptions-api/subscription-
     * billing#billing-dates)
     * for a subscription.
     *
     * @param subscriptionId  The ID of the subscription to update the billing
     *                                                                 anchor date.
     * @param body            An object containing the fields to POST for the
     *                                                                 request.  See the corresponding object definition
     *                                                                 for field details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.changeBillingAnchorDate = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, changeBillingAnchorDateRequest_1.changeBillingAnchorDateRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", "/billing-anchor"], ["/v2/subscriptions/", "/billing-anchor"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(changeBillingAnchorDateResponse_1.changeBillingAnchorDateResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Schedules a `CANCEL` action to cancel an active subscription. This
     * sets the `canceled_date` field to the end of the active billing period. After this date,
     * the subscription status changes from ACTIVE to CANCELED.
     *
     * @param subscriptionId  The ID of the subscription to cancel.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.cancelSubscription = function (subscriptionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", "/cancel"], ["/v2/subscriptions/", "/cancel"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelSubscriptionResponse_1.cancelSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists all [events](https://developer.squareup.com/docs/subscriptions-api/actions-events) for a
     * specific subscription.
     *
     * @param subscriptionId  The ID of the subscription to retrieve the events for.
     * @param cursor          When the total number of resulting subscription events exceeds the limit of a
     *                                  paged response,  specify the cursor returned from a preceding response here to
     *                                  fetch the next set of results. If the cursor is unset, the response contains the
     *                                  last page of the results.  For more information, see [Pagination](https:
     *                                  //developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     * @param limit           The upper limit on the number of subscription events to return in a paged
     *                                  response.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.listSubscriptionEvents = function (subscriptionId, cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", "/events"], ["/v2/subscriptions/", "/events"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listSubscriptionEventsResponse_1.listSubscriptionEventsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Schedules a `PAUSE` action to pause an active subscription.
     *
     * @param subscriptionId  The ID of the subscription to pause.
     * @param body            An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.pauseSubscription = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, pauseSubscriptionRequest_1.pauseSubscriptionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", "/pause"], ["/v2/subscriptions/", "/pause"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(pauseSubscriptionResponse_1.pauseSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Schedules a `RESUME` action to resume a paused or a deactivated subscription.
     *
     * @param subscriptionId  The ID of the subscription to resume.
     * @param body            An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.resumeSubscription = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, resumeSubscriptionRequest_1.resumeSubscriptionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", "/resume"], ["/v2/subscriptions/", "/resume"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(resumeSubscriptionResponse_1.resumeSubscriptionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Schedules a `SWAP_PLAN` action to swap a subscription plan variation in an existing subscription.
     * For more information, see [Swap Subscription Plan Variations](https://developer.squareup.
     * com/docs/subscriptions-api/swap-plan-variations).
     *
     * @param subscriptionId  The ID of the subscription to swap the subscription plan for.
     * @param body            An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    SubscriptionsApi.prototype.swapPlan = function (subscriptionId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    subscriptionId: [subscriptionId, (0, schema_1.string)()],
                    body: [body, swapPlanRequest_1.swapPlanRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["/v2/subscriptions/", "/swap-plan"], ["/v2/subscriptions/", "/swap-plan"])), mapped.subscriptionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(swapPlanResponse_1.swapPlanResponseSchema, requestOptions)];
            });
        });
    };
    return SubscriptionsApi;
}(baseApi_1.BaseApi));
exports.SubscriptionsApi = SubscriptionsApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=subscriptionsApi.js.map