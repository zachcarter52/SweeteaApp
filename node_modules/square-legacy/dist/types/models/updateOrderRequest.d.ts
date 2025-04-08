import { Schema } from '../schema';
import { Order } from './order';
/**
 * Defines the fields that are included in requests to the
 * [UpdateOrder]($e/Orders/UpdateOrder) endpoint.
 */
export interface UpdateOrderRequest {
    /**
     * Contains all information related to a single order to process with Square,
     * including line items that specify the products to purchase. `Order` objects also
     * include information about any associated tenders, refunds, and returns.
     * All Connect V2 Transactions have all been converted to Orders including all associated
     * itemization data.
     */
    order?: Order;
    /**
     * The [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#identifying-fields-to-delete)
     * fields to clear. For example, `line_items[uid].note`.
     * For more information, see [Deleting fields](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#deleting-fields).
     */
    fieldsToClear?: string[] | null;
    /**
     * A value you specify that uniquely identifies this update request.
     * If you are unsure whether a particular update was applied to an order successfully,
     * you can reattempt it with the same idempotency key without
     * worrying about creating duplicate updates to the order.
     * The latest order version is returned.
     * For more information, see [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
     */
    idempotencyKey?: string | null;
}
export declare const updateOrderRequestSchema: Schema<UpdateOrderRequest>;
