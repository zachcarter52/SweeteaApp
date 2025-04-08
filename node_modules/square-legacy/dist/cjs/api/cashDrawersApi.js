"use strict";
exports.__esModule = true;
exports.CashDrawersApi = void 0;
var tslib_1 = require("tslib");
var listCashDrawerShiftEventsResponse_1 = require("../models/listCashDrawerShiftEventsResponse");
var listCashDrawerShiftsResponse_1 = require("../models/listCashDrawerShiftsResponse");
var retrieveCashDrawerShiftResponse_1 = require("../models/retrieveCashDrawerShiftResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var CashDrawersApi = /** @class */ (function (_super) {
    tslib_1.__extends(CashDrawersApi, _super);
    function CashDrawersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provides the details for all of the cash drawer shifts for a location
     * in a date range.
     *
     * @param locationId  The ID of the location to query for a list of cash drawer shifts.
     * @param sortOrder   The order in which cash drawer shifts are listed in the response, based on their
     *                              opened_at field. Default value: ASC
     * @param beginTime   The inclusive start time of the query on opened_at, in ISO 8601 format.
     * @param endTime     The exclusive end date of the query on opened_at, in ISO 8601 format.
     * @param limit       Number of cash drawer shift events in a page of results (200 by default, 1000 max).
     * @param cursor      Opaque cursor for fetching the next page of results.
     * @return Response from the API call
     */
    CashDrawersApi.prototype.listCashDrawerShifts = function (locationId, sortOrder, beginTime, endTime, limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/cash-drawers/shifts');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    sortOrder: [sortOrder, (0, schema_1.optional)((0, schema_1.string)())],
                    beginTime: [beginTime, (0, schema_1.optional)((0, schema_1.string)())],
                    endTime: [endTime, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('location_id', mapped.locationId);
                req.query('sort_order', mapped.sortOrder);
                req.query('begin_time', mapped.beginTime);
                req.query('end_time', mapped.endTime);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCashDrawerShiftsResponse_1.listCashDrawerShiftsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Provides the summary details for a single cash drawer shift. See
     * [ListCashDrawerShiftEvents]($e/CashDrawers/ListCashDrawerShiftEvents) for a list of cash drawer
     * shift events.
     *
     * @param locationId  The ID of the location to retrieve cash drawer shifts from.
     * @param shiftId     The shift ID.
     * @return Response from the API call
     */
    CashDrawersApi.prototype.retrieveCashDrawerShift = function (locationId, shiftId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    shiftId: [shiftId, (0, schema_1.string)()]
                });
                req.query('location_id', mapped.locationId);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/cash-drawers/shifts/", ""], ["/v2/cash-drawers/shifts/", ""])), mapped.shiftId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveCashDrawerShiftResponse_1.retrieveCashDrawerShiftResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Provides a paginated list of events for a single cash drawer shift.
     *
     * @param locationId  The ID of the location to list cash drawer shifts for.
     * @param shiftId     The shift ID.
     * @param limit       Number of resources to be returned in a page of results (200 by default, 1000 max).
     * @param cursor      Opaque cursor for fetching the next page of results.
     * @return Response from the API call
     */
    CashDrawersApi.prototype.listCashDrawerShiftEvents = function (locationId, shiftId, limit, cursor, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    shiftId: [shiftId, (0, schema_1.string)()],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    cursor: [cursor, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('location_id', mapped.locationId);
                req.query('limit', mapped.limit);
                req.query('cursor', mapped.cursor);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/cash-drawers/shifts/", "/events"], ["/v2/cash-drawers/shifts/", "/events"])), mapped.shiftId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listCashDrawerShiftEventsResponse_1.listCashDrawerShiftEventsResponseSchema, requestOptions)];
            });
        });
    };
    return CashDrawersApi;
}(baseApi_1.BaseApi));
exports.CashDrawersApi = CashDrawersApi;
var templateObject_1, templateObject_2;
//# sourceMappingURL=cashDrawersApi.js.map