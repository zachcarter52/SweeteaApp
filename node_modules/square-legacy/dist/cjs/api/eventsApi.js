"use strict";
exports.__esModule = true;
exports.EventsApi = void 0;
var tslib_1 = require("tslib");
var disableEventsResponse_1 = require("../models/disableEventsResponse");
var enableEventsResponse_1 = require("../models/enableEventsResponse");
var listEventTypesResponse_1 = require("../models/listEventTypesResponse");
var searchEventsRequest_1 = require("../models/searchEventsRequest");
var searchEventsResponse_1 = require("../models/searchEventsResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var EventsApi = /** @class */ (function (_super) {
    tslib_1.__extends(EventsApi, _super);
    function EventsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Search for Square API events that occur within a 28-day timeframe.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    EventsApi.prototype.searchEvents = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/events');
                mapped = req.prepareArgs({ body: [body, searchEventsRequest_1.searchEventsRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchEventsResponse_1.searchEventsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Disables events to prevent them from being searchable.
     * All events are disabled by default. You must enable events to make them searchable.
     * Disabling events for a specific time period prevents them from being searchable, even if you re-
     * enable them later.
     *
     * @return Response from the API call
     */
    EventsApi.prototype.disableEvents = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT', '/v2/events/disable');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(disableEventsResponse_1.disableEventsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Enables events to make them searchable. Only events that occur while in the enabled state are
     * searchable.
     *
     * @return Response from the API call
     */
    EventsApi.prototype.enableEvents = function (requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT', '/v2/events/enable');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(enableEventsResponse_1.enableEventsResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Lists all event types that you can subscribe to as webhooks or query using the Events API.
     *
     * @param apiVersion  The API version for which to list event types. Setting this field overrides the
     *                              default version used by the application.
     * @return Response from the API call
     */
    EventsApi.prototype.listEventTypes = function (apiVersion, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET', '/v2/events/types');
                mapped = req.prepareArgs({
                    apiVersion: [apiVersion, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('api_version', mapped.apiVersion);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(listEventTypesResponse_1.listEventTypesResponseSchema, requestOptions)];
            });
        });
    };
    return EventsApi;
}(baseApi_1.BaseApi));
exports.EventsApi = EventsApi;
//# sourceMappingURL=eventsApi.js.map