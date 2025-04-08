"use strict";
exports.__esModule = true;
exports.TransactionsApi = void 0;
var tslib_1 = require("tslib");
var captureTransactionResponse_1 = require("../models/captureTransactionResponse");
var listTransactionsResponse_1 = require("../models/listTransactionsResponse");
var retrieveTransactionResponse_1 = require("../models/retrieveTransactionResponse");
var voidTransactionResponse_1 = require("../models/voidTransactionResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var TransactionsApi = /** @class */ (function (_super) {
    tslib_1.__extends(TransactionsApi, _super);
    function TransactionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists transactions for a particular location.
     *
     * Transactions include payment information from sales and exchanges and refund
     * information from returns and exchanges.
     *
     * Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50
     *
     * @param locationId  The ID of the location to list transactions for.
     * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
     *                              details on date inclusivity/exclusivity.  Default value: The current time minus one
     *                              year.
     * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
     *                              details on date inclusivity/exclusivity.  Default value: The current time.
     * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
     *                              `DESC` for newest first).  Default value: `DESC`
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                              retrieve the next set of results for your original query.  See [Paginating
     *                              results](https://developer.squareup.com/docs/working-with-apis/pagination) for more
     *                              information.
     * @return Response from the API call
     * @deprecated
     */
    TransactionsApi.prototype.listTransactions = function (locationId, beginTime, endTime, sortOrder, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    beginTime: [beginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    endTime: [endTime, (0, schema_1.optional)((0, schema_1.string)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('begin_time', mapped.beginTime);
                req.query('end_time', mapped.endTime);
                req.query('sort_order', mapped.sortOrder);
                req.query('cursor', mapped.cursor);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/locations/", "/transactions"], ["/v2/locations/", "/transactions"])), mapped.locationId);
                req.deprecated('TransactionsApi.listTransactions');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listTransactionsResponse_1.listTransactionsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves details for a single transaction.
     *
     * @param locationId     The ID of the transaction's associated location.
     * @param transactionId  The ID of the transaction to retrieve.
     * @return Response from the API call
     * @deprecated
     */
    TransactionsApi.prototype.retrieveTransaction = function (locationId, transactionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    transactionId: [transactionId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/locations/", "/transactions/", ""], ["/v2/locations/", "/transactions/", ""])), mapped.locationId, mapped.transactionId);
                req.deprecated('TransactionsApi.retrieveTransaction');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveTransactionResponse_1.retrieveTransactionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Captures a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.
     * com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     *
     * @param locationId
     * @param transactionId
     * @return Response from the API call
     * @deprecated
     */
    TransactionsApi.prototype.captureTransaction = function (locationId, transactionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    transactionId: [transactionId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/locations/", "/transactions/", "/capture"], ["/v2/locations/", "/transactions/", "/capture"])), mapped.locationId, mapped.transactionId);
                req.deprecated('TransactionsApi.captureTransaction');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(captureTransactionResponse_1.captureTransactionResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Cancels a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.
     * com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     *
     * @param locationId
     * @param transactionId
     * @return Response from the API call
     * @deprecated
     */
    TransactionsApi.prototype.voidTransaction = function (locationId, transactionId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    transactionId: [transactionId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["/v2/locations/", "/transactions/", "/void"], ["/v2/locations/", "/transactions/", "/void"])), mapped.locationId, mapped.transactionId);
                req.deprecated('TransactionsApi.voidTransaction');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(voidTransactionResponse_1.voidTransactionResponseSchema, requestOptions)];
            });
        });
    };
    return TransactionsApi;
}(baseApi_1.BaseApi));
exports.TransactionsApi = TransactionsApi;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=transactionsApi.js.map