"use strict";
exports.__esModule = true;
exports.OrdersApi = void 0;
var tslib_1 = require("tslib");
var batchRetrieveOrdersRequest_1 = require("../models/batchRetrieveOrdersRequest");
var batchRetrieveOrdersResponse_1 = require("../models/batchRetrieveOrdersResponse");
var calculateOrderRequest_1 = require("../models/calculateOrderRequest");
var calculateOrderResponse_1 = require("../models/calculateOrderResponse");
var cloneOrderRequest_1 = require("../models/cloneOrderRequest");
var cloneOrderResponse_1 = require("../models/cloneOrderResponse");
var createOrderRequest_1 = require("../models/createOrderRequest");
var createOrderResponse_1 = require("../models/createOrderResponse");
var payOrderRequest_1 = require("../models/payOrderRequest");
var payOrderResponse_1 = require("../models/payOrderResponse");
var retrieveOrderResponse_1 = require("../models/retrieveOrderResponse");
var searchOrdersRequest_1 = require("../models/searchOrdersRequest");
var searchOrdersResponse_1 = require("../models/searchOrdersResponse");
var updateOrderRequest_1 = require("../models/updateOrderRequest");
var updateOrderResponse_1 = require("../models/updateOrderResponse");
var schema_1 = require("../schema");
var baseApi_1 = require("./baseApi");
var OrdersApi = /** @class */ (function (_super) {
    tslib_1.__extends(OrdersApi, _super);
    function OrdersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new [order]($m/Order) that can include information about products for
     * purchase and settings to apply to the purchase.
     *
     * To pay for a created order, see
     * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
     *
     * You can modify open orders using the [UpdateOrder]($e/Orders/UpdateOrder) endpoint.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    OrdersApi.prototype.createOrder = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders');
                mapped = req.prepareArgs({ body: [body, createOrderRequest_1.createOrderRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(createOrderResponse_1.createOrderResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves a set of [orders]($m/Order) by their IDs.
     *
     * If a given order ID does not exist, the ID is ignored instead of generating an error.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    OrdersApi.prototype.batchRetrieveOrders = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders/batch-retrieve');
                mapped = req.prepareArgs({
                    body: [body, batchRetrieveOrdersRequest_1.batchRetrieveOrdersRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(batchRetrieveOrdersResponse_1.batchRetrieveOrdersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Enables applications to preview order pricing without creating an order.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    OrdersApi.prototype.calculateOrder = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders/calculate');
                mapped = req.prepareArgs({
                    body: [body, calculateOrderRequest_1.calculateOrderRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(calculateOrderResponse_1.calculateOrderResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created order
     * has
     * only the core fields (such as line items, taxes, and discounts) copied from the original order.
     *
     * @param body         An object containing the fields to POST for the request.  See the
     *                                                 corresponding object definition for field details.
     * @return Response from the API call
     */
    OrdersApi.prototype.cloneOrder = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders/clone');
                mapped = req.prepareArgs({ body: [body, cloneOrderRequest_1.cloneOrderRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(cloneOrderResponse_1.cloneOrderResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Search all orders for one or more locations. Orders include all sales,
     * returns, and exchanges regardless of how or when they entered the Square
     * ecosystem (such as Point of Sale, Invoices, and Connect APIs).
     *
     * `SearchOrders` requests need to specify which locations to search and define a
     * [SearchOrdersQuery]($m/SearchOrdersQuery) object that controls
     * how to sort or filter the results. Your `SearchOrdersQuery` can:
     *
     * Set filter criteria.
     * Set the sort order.
     * Determine whether to return results as complete `Order` objects or as
     * [OrderEntry]($m/OrderEntry) objects.
     *
     * Note that details for orders processed with Square Point of Sale while in
     * offline mode might not be transmitted to Square for up to 72 hours. Offline
     * orders have a `created_at` value that reflects the time the order was created,
     * not the time it was subsequently transmitted to Square.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    OrdersApi.prototype.searchOrders = function (body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST', '/v2/orders/search');
                mapped = req.prepareArgs({ body: [body, searchOrdersRequest_1.searchOrdersRequestSchema] });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(searchOrdersResponse_1.searchOrdersResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Retrieves an [Order]($m/Order) by ID.
     *
     * @param orderId  The ID of the order to retrieve.
     * @return Response from the API call
     */
    OrdersApi.prototype.retrieveOrder = function (orderId, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('GET');
                mapped = req.prepareArgs({ orderId: [orderId, (0, schema_1.string)()] });
                req.appendTemplatePath(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["/v2/orders/", ""], ["/v2/orders/", ""])), mapped.orderId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(retrieveOrderResponse_1.retrieveOrderResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Updates an open [order]($m/Order) by adding, replacing, or deleting
     * fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.
     *
     * An `UpdateOrder` request requires the following:
     *
     * - The `order_id` in the endpoint path, identifying the order to update.
     * - The latest `version` of the order to update.
     * - The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders/update-
     * orders#sparse-order-objects)
     * containing only the fields to update and the version to which the update is
     * being applied.
     * - If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-
     * orders/update-orders#identifying-fields-to-delete)
     * identifying the fields to clear.
     *
     * To pay for an order, see
     * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
     *
     * @param orderId      The ID of the order to update.
     * @param body         An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    OrdersApi.prototype.updateOrder = function (orderId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('PUT');
                mapped = req.prepareArgs({
                    orderId: [orderId, (0, schema_1.string)()],
                    body: [body, updateOrderRequest_1.updateOrderRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["/v2/orders/", ""], ["/v2/orders/", ""])), mapped.orderId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(updateOrderResponse_1.updateOrderResponseSchema, requestOptions)];
            });
        });
    };
    /**
     * Pay for an [order]($m/Order) using one or more approved [payments]($m/Payment)
     * or settle an order with a total of `0`.
     *
     * The total of the `payment_ids` listed in the request must be equal to the order
     * total. Orders with a total amount of `0` can be marked as paid by specifying an empty
     * array of `payment_ids` in the request.
     *
     * To be used with `PayOrder`, a payment must:
     *
     * - Reference the order by specifying the `order_id` when [creating the
     * payment]($e/Payments/CreatePayment).
     * Any approved payments that reference the same `order_id` not specified in the
     * `payment_ids` is canceled.
     * - Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-
     * payments/card-payments/delayed-capture).
     * Using a delayed capture payment with `PayOrder` completes the approved payment.
     *
     * @param orderId      The ID of the order being paid.
     * @param body         An object containing the fields to POST for the request.  See the
     *                                               corresponding object definition for field details.
     * @return Response from the API call
     */
    OrdersApi.prototype.payOrder = function (orderId, body, requestOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, mapped;
            return tslib_1.__generator(this, function (_a) {
                req = this.createRequest('POST');
                mapped = req.prepareArgs({
                    orderId: [orderId, (0, schema_1.string)()],
                    body: [body, payOrderRequest_1.payOrderRequestSchema]
                });
                req.header('Content-Type', 'application/json');
                req.json(mapped.body);
                req.appendTemplatePath(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["/v2/orders/", "/pay"], ["/v2/orders/", "/pay"])), mapped.orderId);
                req.authenticate([{ global: true }]);
                return [2 /*return*/, req.callAsJson(payOrderResponse_1.payOrderResponseSchema, requestOptions)];
            });
        });
    };
    return OrdersApi;
}(baseApi_1.BaseApi));
exports.OrdersApi = OrdersApi;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ordersApi.js.map