"use strict";
exports.__esModule = true;
exports.PaymentsApi = void 0;
var tslib_1 = require("tslib");
var cancelPaymentByIdempotencyKeyRequest_1 = require("../models/cancelPaymentByIdempotencyKeyRequest");
var cancelPaymentByIdempotencyKeyResponse_1 = require("../models/cancelPaymentByIdempotencyKeyResponse");
var cancelPaymentResponse_1 = require("../models/cancelPaymentResponse");
var completePaymentRequest_1 = require("../models/completePaymentRequest");
var completePaymentResponse_1 = require("../models/completePaymentResponse");
var createPaymentRequest_1 = require("../models/createPaymentRequest");
var createPaymentResponse_1 = require("../models/createPaymentResponse");
var getPaymentResponse_1 = require("../models/getPaymentResponse");
var listPaymentsResponse_1 = require("../models/listPaymentsResponse");
var updatePaymentRequest_1 = require("../models/updatePaymentRequest");
var updatePaymentResponse_1 = require("../models/updatePaymentResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var PaymentsApi = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentsApi, _super);
    function PaymentsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of payments taken by the account making the request.
     *
     * Results are eventually consistent, and new payments or changes to payments might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     *
     * @param beginTime             Indicates the start of the time range to retrieve payments for, in RFC
     *                                         3339 format.   The range is determined using the `created_at` field for
     *                                         each Payment. Inclusive. Default: The current time minus one year.
     * @param endTime               Indicates the end of the time range to retrieve payments for, in RFC 3339
     *                                         format.  The  range is determined using the `created_at` field for each
     *                                         Payment.  Default: The current time.
     * @param sortOrder             The order in which results are listed by `ListPaymentsRequest.sort_field`:
     *                                         - `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
     * @param cursor                A pagination cursor returned by a previous call to this endpoint. Provide
     *                                         this cursor to retrieve the next set of results for the original query.
     *                                         For more information, see [Pagination](https://developer.squareup.
     *                                         com/docs/build-basics/common-api-patterns/pagination).
     * @param locationId            Limit results to the location supplied. By default, results are returned
     *                                         for the default (main) location associated with the seller.
     * @param total                 The exact amount in the `total_money` for a payment.
     * @param last4                 The last four digits of a payment card.
     * @param cardBrand             The brand of the payment card (for example, VISA).
     * @param limit                 The maximum number of results to be returned in a single page. It is
     *                                         possible to receive fewer results than the specified limit on a given page.
     *                                         The default value of 100 is also the maximum allowed value. If the
     *                                         provided value is  greater than 100, it is ignored and the default value
     *                                         is used instead.  Default: `100`
     * @param isOfflinePayment      Whether the payment was taken offline or not.
     * @param offlineBeginTime      Indicates the start of the time range for which to retrieve offline
     *                                         payments, in RFC 3339 format for timestamps. The range is determined using
     *                                         the `offline_payment_details.client_created_at` field for each Payment. If
     *                                         set, payments without a value set in `offline_payment_details.
     *                                         client_created_at` will not be returned.  Default: The current time.
     * @param offlineEndTime        Indicates the end of the time range for which to retrieve offline
     *                                         payments, in RFC 3339 format for timestamps. The range is determined using
     *                                         the `offline_payment_details.client_created_at` field for each Payment. If
     *                                         set, payments without a value set in `offline_payment_details.
     *                                         client_created_at` will not be returned.  Default: The current time.
     * @param updatedAtBeginTime    Indicates the start of the time range to retrieve payments for, in RFC
     *                                         3339 format.  The range is determined using the `updated_at` field for
     *                                         each Payment.
     * @param updatedAtEndTime      Indicates the end of the time range to retrieve payments for, in RFC 3339
     *                                         format.  The range is determined using the `updated_at` field for each
     *                                         Payment.
     * @param sortField             The field used to sort results by. The default is `CREATED_AT`.
     * @return Response from the API call
     */
    PaymentsApi.prototype.listPayments = function (beginTime, endTime, sortOrder, cursor, locationId, total, last4, cardBrand, limit, isOfflinePayment, offlineBeginTime, offlineEndTime, updatedAtBeginTime, updatedAtEndTime, sortField, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/payments');
                mapped = req.prepareArgs({
                    beginTime: [beginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    endTime: [endTime, (0, schema_1.optional)((0, schema_1.string)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())],
                    total: [total, (0, schema_1.optional)((0, schema_1.bigint)())],
                    last4: [last4, (0, schema_1.optional)((0, schema_1.string)())],
                    cardBrand: [cardBrand, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    isOfflinePayment: [isOfflinePayment, (0, schema_1.optional)((0, schema_1.boolean)())],
                    offlineBeginTime: [offlineBeginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    offlineEndTime: [offlineEndTime, (0, schema_1.optional)((0, schema_1.string)())],
                    updatedAtBeginTime: [updatedAtBeginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    updatedAtEndTime: [updatedAtEndTime, (0, schema_1.optional)((0, schema_1.string)())],
                    sortField: [sortField, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('begin_time', mapped.beginTime);
                req.query('end_time', mapped.endTime);
                req.query('sort_order', mapped.sortOrder);
                req.query('cursor', mapped.cursor);
                req.query('location_id', mapped.locationId);
                req.query('total', mapped.total);
                req.query('last_4', mapped.last4);
                req.query('card_brand', mapped.cardBrand);
                req.query('limit', mapped.limit);
                req.query('is_offline_payment', mapped.isOfflinePayment);
                req.query('offline_begin_time', mapped.offlineBeginTime);
                req.query('offline_end_time', mapped.offlineEndTime);
                req.query('updated_at_begin_time', mapped.updatedAtBeginTime);
                req.query('updated_at_end_time', mapped.updatedAtEndTime);
                req.query('sort_field', mapped.sortField);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listPaymentsResponse_1.listPaymentsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a payment using the provided source. You can use this endpoint
     * to charge a card (credit/debit card or
     * Square gift card) or record a payment that the seller received outside of Square
     * (cash payment from a buyer or a payment that an external entity
     * processed on behalf of the seller).
     *
     * The endpoint creates a
     * `Payment` object and returns it in the response.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    PaymentsApi.prototype.createPayment = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/payments');
                mapped = req.prepareArgs({
                    body: [body, createPaymentRequest_1.createPaymentRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createPaymentResponse_1.createPaymentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels (voids) a payment identified by the idempotency key that is specified in the
     * request.
     *
     * Use this method when the status of a `CreatePayment` request is unknown (for example, after you send
     * a
     * `CreatePayment` request, a network error occurs and you do not get a response). In this case, you
     * can
     * direct Square to cancel the payment using this endpoint. In the request, you provide the same
     * idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
     * canceling the payment, you can submit your `CreatePayment` request again.
     *
     * Note that if no payment with the specified idempotency key is found, no action is taken and the
     * endpoint
     * returns successfully.
     *
     * @param body         An object containing the fields to POST for
     *                                                                    the request.  See the corresponding object
     *                                                                    definition for field details.
     * @return Response from the API call
     */
    PaymentsApi.prototype.cancelPaymentByIdempotencyKey = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/payments/cancel');
                mapped = req.prepareArgs({
                    body: [body, cancelPaymentByIdempotencyKeyRequest_1.cancelPaymentByIdempotencyKeyRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelPaymentByIdempotencyKeyResponse_1.cancelPaymentByIdempotencyKeyResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves details for a specific payment.
     *
     * @param paymentId  A unique ID for the desired payment.
     * @return Response from the API call
     */
    PaymentsApi.prototype.getPayment = function (paymentId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ paymentId: [paymentId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/payments/", ""], ["/v2/payments/", ""])), mapped.paymentId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getPaymentResponse_1.getPaymentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates a payment with the APPROVED status.
     * You can update the `amount_money` and `tip_money` using this endpoint.
     *
     * @param paymentId    The ID of the payment to update.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    PaymentsApi.prototype.updatePayment = function (paymentId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    paymentId: [paymentId, (0, schema_1.string)()],
                    body: [body, updatePaymentRequest_1.updatePaymentRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/payments/", ""], ["/v2/payments/", ""])), mapped.paymentId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updatePaymentResponse_1.updatePaymentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels (voids) a payment. You can use this endpoint to cancel a payment with
     * the APPROVED `status`.
     *
     * @param paymentId  The ID of the payment to cancel.
     * @return Response from the API call
     */
    PaymentsApi.prototype.cancelPayment = function (paymentId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({ paymentId: [paymentId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/payments/", "/cancel"], ["/v2/payments/", "/cancel"])), mapped.paymentId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cancelPaymentResponse_1.cancelPaymentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Completes (captures) a payment.
     * By default, payments are set to complete immediately after they are created.
     *
     * You can use this endpoint to complete a payment with the APPROVED `status`.
     *
     * @param paymentId    The unique ID identifying the payment to be completed.
     * @param body         An object containing the fields to POST for the request.
     *                                                      See the corresponding object definition for field details.
     * @return Response from the API call
     */
    PaymentsApi.prototype.completePayment = function (paymentId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    paymentId: [paymentId, (0, schema_1.string)()],
                    body: [body, completePaymentRequest_1.completePaymentRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/payments/", "/complete"], ["/v2/payments/", "/complete"])), mapped.paymentId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(completePaymentResponse_1.completePaymentResponseSchema, requestOptions)];
            });
        });
    };
    return PaymentsApi;
}(baseApi_1.BaseApi));
exports.PaymentsApi = PaymentsApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=paymentsApi.js.map