import { ApiResponse, RequestOptions } from '../core';
import { BatchRetrieveOrdersRequest } from '../models/batchRetrieveOrdersRequest';
import { BatchRetrieveOrdersResponse } from '../models/batchRetrieveOrdersResponse';
import { CalculateOrderRequest } from '../models/calculateOrderRequest';
import { CalculateOrderResponse } from '../models/calculateOrderResponse';
import { CloneOrderRequest } from '../models/cloneOrderRequest';
import { CloneOrderResponse } from '../models/cloneOrderResponse';
import { CreateOrderRequest } from '../models/createOrderRequest';
import { CreateOrderResponse } from '../models/createOrderResponse';
import { PayOrderRequest } from '../models/payOrderRequest';
import { PayOrderResponse } from '../models/payOrderResponse';
import { RetrieveOrderResponse } from '../models/retrieveOrderResponse';
import { SearchOrdersRequest } from '../models/searchOrdersRequest';
import { SearchOrdersResponse } from '../models/searchOrdersResponse';
import { UpdateOrderRequest } from '../models/updateOrderRequest';
import { UpdateOrderResponse } from '../models/updateOrderResponse';
import { BaseApi } from './baseApi';
export declare class OrdersApi extends BaseApi {
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
    createOrder(body: CreateOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateOrderResponse>>;
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
    batchRetrieveOrders(body: BatchRetrieveOrdersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BatchRetrieveOrdersResponse>>;
    /**
     * Enables applications to preview order pricing without creating an order.
     *
     * @param body         An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     */
    calculateOrder(body: CalculateOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CalculateOrderResponse>>;
    /**
     * Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created order
     * has
     * only the core fields (such as line items, taxes, and discounts) copied from the original order.
     *
     * @param body         An object containing the fields to POST for the request.  See the
     *                                                 corresponding object definition for field details.
     * @return Response from the API call
     */
    cloneOrder(body: CloneOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CloneOrderResponse>>;
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
    searchOrders(body: SearchOrdersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchOrdersResponse>>;
    /**
     * Retrieves an [Order]($m/Order) by ID.
     *
     * @param orderId  The ID of the order to retrieve.
     * @return Response from the API call
     */
    retrieveOrder(orderId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveOrderResponse>>;
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
    updateOrder(orderId: string, body: UpdateOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateOrderResponse>>;
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
    payOrder(orderId: string, body: PayOrderRequest, requestOptions?: RequestOptions): Promise<ApiResponse<PayOrderResponse>>;
}
