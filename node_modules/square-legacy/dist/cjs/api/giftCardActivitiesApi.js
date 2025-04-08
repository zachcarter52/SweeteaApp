"use strict";
exports.__esModule = true;
exports.GiftCardActivitiesApi = void 0;
var tslib_1 = require("tslib");
var createGiftCardActivityRequest_1 = require("../models/createGiftCardActivityRequest");
var createGiftCardActivityResponse_1 = require("../models/createGiftCardActivityResponse");
var listGiftCardActivitiesResponse_1 = require("../models/listGiftCardActivitiesResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var GiftCardActivitiesApi = /** @class */ (function (_super) {
    tslib_1.__extends(GiftCardActivitiesApi, _super);
    function GiftCardActivitiesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Lists gift card activities. By default, you get gift card activities for all
     * gift cards in the seller's account. You can optionally specify query parameters to
     * filter the list. For example, you can get a list of gift card activities for a gift card,
     * for all gift cards in a specific region, or for activities within a time window.
     *
     * @param giftCardId   If a gift card ID is provided, the endpoint returns activities related  to the
     *                               specified gift card. Otherwise, the endpoint returns all gift card activities for
     *                               the seller.
     * @param type         If a [type](entity:GiftCardActivityType) is provided, the endpoint returns gift
     *                               card activities of the specified type.  Otherwise, the endpoint returns all types of
     *                               gift card activities.
     * @param locationId   If a location ID is provided, the endpoint returns gift card activities for the
     *                               specified location.  Otherwise, the endpoint returns gift card activities for all
     *                               locations.
     * @param beginTime    The timestamp for the beginning of the reporting period, in RFC 3339 format. This
     *                               start time is inclusive. The default value is the current time minus one year.
     * @param endTime      The timestamp for the end of the reporting period, in RFC 3339 format. This end
     *                               time is inclusive. The default value is the current time.
     * @param limit        If a limit is provided, the endpoint returns the specified number  of results (or
     *                               fewer) per page. The maximum value is 100. The default value is 50. For more
     *                               information, see [Pagination](https://developer.squareup.com/docs/working-with-
     *                               apis/pagination).
     * @param cursor       A pagination cursor returned by a previous call to this endpoint. Provide this
     *                               cursor to retrieve the next set of results for the original query. If a cursor is
     *                               not provided, the endpoint returns the first page of the results. For more
     *                               information, see [Pagination](https://developer.squareup.com/docs/working-with-
     *                               apis/pagination).
     * @param sortOrder    The order in which the endpoint returns the activities, based on `created_at`. -
     *                               `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
     * @return Response from the API call
     */
    GiftCardActivitiesApi.prototype.listGiftCardActivities = function (giftCardId, type, locationId, beginTime, endTime, limit, cursor, sortOrder, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/gift-cards/activities');
                mapped = req.prepareArgs({
                    giftCardId: [giftCardId, (0, schema_1.optional)((0, schema_1.string)())],
                    type: [type, (0, schema_1.optional)((0, schema_1.string)())],
                    locationId: [locationId, (0, schema_1.optional)((0, schema_1.string)())],
                    beginTime: [beginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    endTime: [endTime, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('gift_card_id', mapped.giftCardId);
                req.query('type', mapped.type);
                req.query('location_id', mapped.locationId);
                req.query('begin_time', mapped.beginTime);
                req.query('end_time', mapped.endTime);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.query('sort_order', mapped.sortOrder);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listGiftCardActivitiesResponse_1.listGiftCardActivitiesResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a gift card activity to manage the balance or state of a [gift card]($m/GiftCard).
     * For example, create an `ACTIVATE` activity to activate a gift card with an initial balance before
     * first use.
     *
     * @param body         An object containing the fields to POST for the
     *                                                             request.  See the corresponding object definition for
     *                                                             field details.
     * @return Response from the API call
     */
    GiftCardActivitiesApi.prototype.createGiftCardActivity = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/gift-cards/activities');
                mapped = req.prepareArgs({
                    body: [body, createGiftCardActivityRequest_1.createGiftCardActivityRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createGiftCardActivityResponse_1.createGiftCardActivityResponseSchema, requestOptions)];
            });
        });
    };
    return GiftCardActivitiesApi;
}(baseApi_1.BaseApi));
exports.GiftCardActivitiesApi = GiftCardActivitiesApi;
//# sourceMappingURL=giftCardActivitiesApi.js.map