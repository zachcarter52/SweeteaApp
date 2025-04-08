"use strict";
exports.__esModule = true;
exports.PayoutsApi = void 0;
var tslib_1 = require("tslib");
var getPayoutResponse_1 = require("../models/getPayoutResponse");
var listPayoutEntriesResponse_1 = require("../models/listPayoutEntriesResponse");
var listPayoutsResponse_1 = require("../models/listPayoutsResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var PayoutsApi = /** @class */ (function (_super) {
    tslib_1.__extends(PayoutsApi, _super);
    function PayoutsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of all payouts for the default location.
     * You can filter payouts by location ID, status, time range, and order them in ascending or descending
     * order.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param locationId  The ID of the location for which to list the payouts. By default, payouts are
     *                              returned for the default (main) location associated with the seller.
     * @param status      If provided, only payouts with the given status are returned.
     * @param beginTime   The timestamp for the beginning of the payout creation time, in RFC 3339 format.
     *                              Inclusive. Default: The current time minus one year.
     * @param endTime     The timestamp for the end of the payout creation time, in RFC 3339 format. Default:
     *                              The current time.
     * @param sortOrder   The order in which payouts are listed.
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this
     *                              cursor to retrieve the next set of results for the original query. For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-
     *                              api-patterns/pagination). If request parameters change between requests, subsequent
     *                              results may contain duplicates or missing records.
     * @param limit       The maximum number of results to be returned in a single page. It is possible to
     *                              receive fewer results than the specified limit on a given page. The default value of
     *                              100 is also the maximum allowed value. If the provided value is greater than 100, it
     *                              is ignored and the default value is used instead. Default: `100`
     * @return Response from the API call
     */
    PayoutsApi.prototype.listPayouts = function (locationId, status, beginTime, endTime, sortOrder, cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/payouts');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())],
                    status: [status, (0, schema_1.optional)((0, schema_1.string)())],
                    beginTime: [beginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    endTime: [endTime, (0, schema_1.optional)((0, schema_1.string)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('location_id', mapped.locationId);
                req.query('status', mapped.status);
                req.query('begin_time', mapped.beginTime);
                req.query('end_time', mapped.endTime);
                req.query('sort_order', mapped.sortOrder);
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listPayoutsResponse_1.listPayoutsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves details of a specific payout identified by a payout ID.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param payoutId  The ID of the payout to retrieve the information for.
     * @return Response from the API call
     */
    PayoutsApi.prototype.getPayout = function (payoutId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ payoutId: [payoutId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/payouts/", ""], ["/v2/payouts/", ""])), mapped.payoutId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(getPayoutResponse_1.getPayoutResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a list of all payout entries for a specific payout.
     * To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.
     *
     * @param payoutId   The ID of the payout to retrieve the information for.
     * @param sortOrder  The order in which payout entries are listed.
     * @param cursor     A pagination cursor returned by a previous call to this endpoint. Provide this cursor
     *                             to retrieve the next set of results for the original query. For more information, see
     *                             [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                             patterns/pagination). If request parameters change between requests, subsequent
     *                             results may contain duplicates or missing records.
     * @param limit      The maximum number of results to be returned in a single page. It is possible to
     *                             receive fewer results than the specified limit on a given page. The default value of
     *                             100 is also the maximum allowed value. If the provided value is greater than 100, it
     *                             is ignored and the default value is used instead. Default: `100`
     * @return Response from the API call
     */
    PayoutsApi.prototype.listPayoutEntries = function (payoutId, sortOrder, cursor, limit, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    payoutId: [payoutId, (0, schema_1.string)()],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())]
                });
                req.query('sort_order', mapped.sortOrder);
                req.query('cursor', mapped.cursor);
                req.query('limit', mapped.limit);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/payouts/", "/payout-entries"], ["/v2/payouts/", "/payout-entries"])), mapped.payoutId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listPayoutEntriesResponse_1.listPayoutEntriesResponseSchema, requestOptions)];
            });
        });
    };
    return PayoutsApi;
}(baseApi_1.BaseApi));
exports.PayoutsApi = PayoutsApi;
var templateObject_1, templateObject_2;
//# sourceMappingURL=payoutsApi.js.map