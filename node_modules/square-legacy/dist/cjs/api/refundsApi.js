"use strict";
exports.__esModule = true;
exports.RefundsApi = void 0;
var tslib_1 = require("tslib");
var getPaymentRefundResponse_1 = require("../models/getPaymentRefundResponse");
var listPaymentRefundsResponse_1 = require("../models/listPaymentRefundsResponse");
var refundPaymentRequest_1 = require("../models/refundPaymentRequest");
var refundPaymentResponse_1 = require("../models/refundPaymentResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var RefundsApi = /** @class */ (function (_super) {
    tslib_1.__extends(RefundsApi, _super);
    function RefundsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of refunds for the account making the request.
     *
     * Results are eventually consistent, and new refunds or changes to refunds might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     *
     * @param beginTime   Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC
     *                              3339  format.  The range is determined using the `created_at` field for each
     *                              `PaymentRefund`.   Default: The current time minus one year.
     * @param endTime     Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC
     *                              3339  format.  The range is determined using the `created_at` field for each
     *                              `PaymentRefund`.  Default: The current time.
     * @param sortOrder   The order in which results are listed by `PaymentRefund.created_at`: - `ASC` -
     *                              Oldest to newest. - `DESC` - Newest to oldest (default).
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query.  For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination).
     * @param locationId  Limit results to the location supplied. By default, results are returned for all
     *                              locations associated with the seller.
     * @param status      If provided, only refunds with the given status are returned. For a list of refund
     *                              status values, see [PaymentRefund](entity:PaymentRefund).  Default: If omitted,
     *                              refunds are returned regardless of their status.
     * @param sourceType  If provided, only returns refunds whose payments have the indicated source type.
     *                              Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, and `EXTERNAL`. For
     *                              information about these payment source types, see [Take Payments](https://developer.
     *                              squareup.com/docs/payments-api/take-payments).  Default: If omitted, refunds are
     *                              returned regardless of the source type.
     * @param limit       The maximum number of results to be returned in a single page.  It is possible to
     *                              receive fewer results than the specified limit on a given page.  If the supplied
     *                              value is greater than 100, no more than 100 results are returned.  Default: 100
     * @return Response from the API call
     */
    RefundsApi.prototype.listPaymentRefunds = function (beginTime, endTime, sortOrder, cursor, locationId, status, sourceType, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/refunds');
                mapped = req.prepareArgs({
                    beginTime: [beginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    endTime: [endTime, (0, schema_1.optional)((0, schema_1.string)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())],
                    status: [status, (0, schema_1.optional)((0, schema_1.string)())],
                    sourceType: [sourceType, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('begin_time', mapped.beginTime);
                req.query('end_time', mapped.endTime);
                req.query('sort_order', mapped.sortOrder);
                req.query('cursor', mapped.cursor);
                req.query('location_id', mapped.locationId);
                req.query('status', mapped.status);
                req.query('source_type', mapped.sourceType);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listPaymentRefundsResponse_1.listPaymentRefundsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Refunds a payment. You can refund the entire payment amount or a
     * portion of it. You can use this endpoint to refund a card payment or record a
     * refund of a cash or external payment. For more information, see
     * [Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    RefundsApi.prototype.refundPayment = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/refunds');
                mapped = req.prepareArgs({
                    body: [body, refundPaymentRequest_1.refundPaymentRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(refundPaymentResponse_1.refundPaymentResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a specific refund using the `refund_id`.
     *
     * @param refundId  The unique ID for the desired `PaymentRefund`.
     * @return Response from the API call
     */
    RefundsApi.prototype.getPaymentRefund = function (refundId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ refundId: [refundId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/refunds/", ""], ["/v2/refunds/", ""])), mapped.refundId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getPaymentRefundResponse_1.getPaymentRefundResponseSchema, requestOptions)];
            });
        });
    };
    return RefundsApi;
}(baseApi_1.BaseApi));
exports.RefundsApi = RefundsApi;
var templateObject_1;
//# sourceMappingURL=refundsApi.js.map