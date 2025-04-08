"use strict";
exports.__esModule = true;
exports.V1TransactionsApi = void 0;
var tslib_1 = require("tslib");
var v1Order_1 = require("../models/v1Order");
var v1UpdateOrderRequest_1 = require("../models/v1UpdateOrderRequest");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var V1TransactionsApi = /** @class */ (function (_super) {
    tslib_1.__extends(V1TransactionsApi, _super);
    function V1TransactionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provides summary information for a merchant's online store orders.
     *
     * @param locationId  The ID of the location to list online store orders for.
     * @param order       The order in which payments are listed in the response.
     * @param limit       The maximum number of payments to return in a single response. This value cannot
     *                              exceed 200.
     * @param batchToken  A pagination cursor to retrieve the next set of results for your original query to
     *                              the endpoint.
     * @return Response from the API call
     * @deprecated
     */
    V1TransactionsApi.prototype.v1ListOrders = function (locationId, order, limit, batchToken, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    order: [order, (0, schema_1.optional)((0, schema_1.string)())],
                    limit: [limit, (0, schema_1.optional)((0, schema_1.number)())],
                    batchToken: [batchToken, (0, schema_1.optional)((0, schema_1.string)())]
                });
                req.query('order', mapped.order);
                req.query('limit', mapped.limit);
                req.query('batch_token', mapped.batchToken);
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v1/", "/orders"], ["/v1/", "/orders"])), mapped.locationId);
                req.deprecated('V1TransactionsApi.v1ListOrders');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson((0, schema_1.array)(v1Order_1.v1OrderSchema), requestOptions)];
            });
        });
    };
    /**
     * Provides comprehensive information for a single online store order, including the order's history.
     *
     * @param locationId  The ID of the order's associated location.
     * @param orderId     The order's Square-issued ID. You obtain this value from Order objects returned by
     *                              the List Orders endpoint
     * @return Response from the API call
     * @deprecated
     */
    V1TransactionsApi.prototype.v1RetrieveOrder = function (locationId, orderId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    orderId: [orderId, (0, schema_1.string)()]
                });
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v1/", "/orders/", ""], ["/v1/", "/orders/", ""])), mapped.locationId, mapped.orderId);
                req.deprecated('V1TransactionsApi.v1RetrieveOrder');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(v1Order_1.v1OrderSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates the details of an online store order. Every update you perform on an order corresponds to
     * one of three actions:
     *
     * @param locationId   The ID of the order's associated location.
     * @param orderId      The order's Square-issued ID. You obtain this value from Order
     *                                                    objects returned by the List Orders endpoint
     * @param body         An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    V1TransactionsApi.prototype.v1UpdateOrder = function (locationId, orderId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    locationId: [locationId, (0, schema_1.string)()],
                    orderId: [orderId, (0, schema_1.string)()],
                    body: [body, v1UpdateOrderRequest_1.v1UpdateOrderRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v1/", "/orders/", ""], ["/v1/", "/orders/", ""])), mapped.locationId, mapped.orderId);
                req.deprecated('V1TransactionsApi.v1UpdateOrder');
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(v1Order_1.v1OrderSchema, requestOptions)];
            });
        });
    };
    return V1TransactionsApi;
}(baseApi_1.BaseApi));
exports.V1TransactionsApi = V1TransactionsApi;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=v1TransactionsApi.js.map