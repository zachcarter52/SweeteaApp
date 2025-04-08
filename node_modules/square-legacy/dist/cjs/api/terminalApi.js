"use strict";
exports.__esModule = true;
exports.TerminalApi = void 0;
var tslib_1 = require("tslib");
var cancelTerminalActionResponse_1 = require("../models/cancelTerminalActionResponse");
var cancelTerminalCheckoutResponse_1 = require("../models/cancelTerminalCheckoutResponse");
var cancelTerminalRefundResponse_1 = require("../models/cancelTerminalRefundResponse");
var createTerminalActionRequest_1 = require("../models/createTerminalActionRequest");
var createTerminalActionResponse_1 = require("../models/createTerminalActionResponse");
var createTerminalCheckoutRequest_1 = require("../models/createTerminalCheckoutRequest");
var createTerminalCheckoutResponse_1 = require("../models/createTerminalCheckoutResponse");
var createTerminalRefundRequest_1 = require("../models/createTerminalRefundRequest");
var createTerminalRefundResponse_1 = require("../models/createTerminalRefundResponse");
var dismissTerminalActionResponse_1 = require("../models/dismissTerminalActionResponse");
var dismissTerminalCheckoutResponse_1 = require("../models/dismissTerminalCheckoutResponse");
var dismissTerminalRefundResponse_1 = require("../models/dismissTerminalRefundResponse");
var getTerminalActionResponse_1 = require("../models/getTerminalActionResponse");
var getTerminalCheckoutResponse_1 = require("../models/getTerminalCheckoutResponse");
var getTerminalRefundResponse_1 = require("../models/getTerminalRefundResponse");
var searchTerminalActionsRequest_1 = require("../models/searchTerminalActionsRequest");
var searchTerminalActionsResponse_1 = require("../models/searchTerminalActionsResponse");
var searchTerminalCheckoutsRequest_1 = require("../models/searchTerminalCheckoutsRequest");
var searchTerminalCheckoutsResponse_1 = require("../models/searchTerminalCheckoutsResponse");
var searchTerminalRefundsRequest_1 = require("../models/searchTerminalRefundsRequest");
var searchTerminalRefundsResponse_1 = require("../models/searchTerminalRefundsResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var TerminalApi = /** @class */ (function (_super) {
    tslib_1.__extends(TerminalApi, _super);
    function TerminalApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a Terminal action request and sends it to the specified device.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    TerminalApi.prototype.createTerminalAction = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/terminals/actions');
                mapped = req.prepareArgs({
                    body: [body, createTerminalActionRequest_1.createTerminalActionRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createTerminalActionResponse_1.createTerminalActionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a filtered list of Terminal action requests created by the account making the request.
     * Terminal action requests are available for 30 days.
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    TerminalApi.prototype.searchTerminalActions = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/terminals/actions/search');
                mapped = req.prepareArgs({
                    body: [body, searchTerminalActionsRequest_1.searchTerminalActionsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchTerminalActionsResponse_1.searchTerminalActionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a Terminal action request by `action_id`. Terminal action requests are available for 30
     * days.
     *
     * @param actionId  Unique ID for the desired `TerminalAction`.
     * @return Response from the API call
     */
    TerminalApi.prototype.getTerminalAction = function (actionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ actionId: [actionId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/terminals/actions/", ""], ["/v2/terminals/actions/", ""])), mapped.actionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getTerminalActionResponse_1.getTerminalActionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels a Terminal action request if the status of the request permits it.
     *
     * @param actionId  Unique ID for the desired `TerminalAction`.
     * @return Response from the API call
     */
    TerminalApi.prototype.cancelTerminalAction = function (actionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ actionId: [actionId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/terminals/actions/", "/cancel"], ["/v2/terminals/actions/", "/cancel"])), mapped.actionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelTerminalActionResponse_1.cancelTerminalActionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Dismisses a Terminal action request if the status and type of the request permits it.
     *
     * See [Link and Dismiss Actions](https://developer.squareup.com/docs/terminal-api/advanced-
     * features/custom-workflows/link-and-dismiss-actions) for more details.
     *
     * @param actionId  Unique ID for the `TerminalAction` associated with the action to be dismissed.
     * @return Response from the API call
     */
    TerminalApi.prototype.dismissTerminalAction = function (actionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ actionId: [actionId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/terminals/actions/", "/dismiss"], ["/v2/terminals/actions/", "/dismiss"])), mapped.actionId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(dismissTerminalActionResponse_1.dismissTerminalActionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a Terminal checkout request and sends it to the specified device to take a payment
     * for the requested amount.
     *
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    TerminalApi.prototype.createTerminalCheckout = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/terminals/checkouts');
                mapped = req.prepareArgs({
                    body: [body, createTerminalCheckoutRequest_1.createTerminalCheckoutRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createTerminalCheckoutResponse_1.createTerminalCheckoutResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Returns a filtered list of Terminal checkout requests created by the application making the request.
     * Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned.
     * Terminal checkout requests are available for 30 days.
     *
     * @param body         An object containing the fields to POST for the
     *                                                              request.  See the corresponding object definition for
     *                                                              field details.
     * @return Response from the API call
     */
    TerminalApi.prototype.searchTerminalCheckouts = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/terminals/checkouts/search');
                mapped = req.prepareArgs({
                    body: [body, searchTerminalCheckoutsRequest_1.searchTerminalCheckoutsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchTerminalCheckoutsResponse_1.searchTerminalCheckoutsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are available for
     * 30 days.
     *
     * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
     * @return Response from the API call
     */
    TerminalApi.prototype.getTerminalCheckout = function (checkoutId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ checkoutId: [checkoutId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/terminals/checkouts/", ""], ["/v2/terminals/checkouts/", ""])), mapped.checkoutId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getTerminalCheckoutResponse_1.getTerminalCheckoutResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels a Terminal checkout request if the status of the request permits it.
     *
     * @param checkoutId  The unique ID for the desired `TerminalCheckout`.
     * @return Response from the API call
     */
    TerminalApi.prototype.cancelTerminalCheckout = function (checkoutId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ checkoutId: [checkoutId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["/v2/terminals/checkouts/", "/cancel"], ["/v2/terminals/checkouts/", "/cancel"])), mapped.checkoutId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelTerminalCheckoutResponse_1.cancelTerminalCheckoutResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Dismisses a Terminal checkout request if the status and type of the request permits it.
     *
     * @param checkoutId  Unique ID for the `TerminalCheckout` associated with the checkout to be dismissed.
     * @return Response from the API call
     */
    TerminalApi.prototype.dismissTerminalCheckout = function (checkoutId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ checkoutId: [checkoutId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["/v2/terminals/checkouts/", "/dismiss"], ["/v2/terminals/checkouts/", "/dismiss"])), mapped.checkoutId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(dismissTerminalCheckoutResponse_1.dismissTerminalCheckoutResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for Interac
     * payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds
     * for Terminal payments should use the Refunds API. For more information, see [Refunds
     * API]($e/Refunds).
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    TerminalApi.prototype.createTerminalRefund = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/terminals/refunds');
                mapped = req.prepareArgs({
                    body: [body, createTerminalRefundRequest_1.createTerminalRefundRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createTerminalRefundResponse_1.createTerminalRefundResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a filtered list of Interac Terminal refund requests created by the seller making the
     * request. Terminal refund requests are available for 30 days.
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    TerminalApi.prototype.searchTerminalRefunds = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/terminals/refunds/search');
                mapped = req.prepareArgs({
                    body: [body, searchTerminalRefundsRequest_1.searchTerminalRefundsRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchTerminalRefundsResponse_1.searchTerminalRefundsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30 days.
     *
     * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
     * @return Response from the API call
     */
    TerminalApi.prototype.getTerminalRefund = function (terminalRefundId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    terminalRefundId: [terminalRefundId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["/v2/terminals/refunds/", ""], ["/v2/terminals/refunds/", ""])), mapped.terminalRefundId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getTerminalRefundResponse_1.getTerminalRefundResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels an Interac Terminal refund request by refund request ID if the status of the request permits
     * it.
     *
     * @param terminalRefundId   The unique ID for the desired `TerminalRefund`.
     * @return Response from the API call
     */
    TerminalApi.prototype.cancelTerminalRefund = function (terminalRefundId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    terminalRefundId: [terminalRefundId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["/v2/terminals/refunds/", "/cancel"], ["/v2/terminals/refunds/", "/cancel"])), mapped.terminalRefundId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelTerminalRefundResponse_1.cancelTerminalRefundResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Dismisses a Terminal refund request if the status and type of the request permits it.
     *
     * @param terminalRefundId   Unique ID for the `TerminalRefund` associated with the refund to be dismissed.
     * @return Response from the API call
     */
    TerminalApi.prototype.dismissTerminalRefund = function (terminalRefundId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    terminalRefundId: [terminalRefundId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["/v2/terminals/refunds/", "/dismiss"], ["/v2/terminals/refunds/", "/dismiss"])), mapped.terminalRefundId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(dismissTerminalRefundResponse_1.dismissTerminalRefundResponseSchema, requestOptions)];
            });
        });
    };
    return TerminalApi;
}(baseApi_1.BaseApi));
exports.TerminalApi = TerminalApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=terminalApi.js.map