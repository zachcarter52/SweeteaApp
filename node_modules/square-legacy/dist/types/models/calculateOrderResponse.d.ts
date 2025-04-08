import { Schema } from '../schema';
import { Error } from './error';
import { Order } from './order';
export interface CalculateOrderResponse {
    /**
     * Contains all information related to a single order to process with Square,
     * including line items that specify the products to purchase. `Order` objects also
     * include information about any associated tenders, refunds, and returns.
     * All Connect V2 Transactions have all been converted to Orders including all associated
     * itemization data.
     */
    order?: Order;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const calculateOrderResponseSchema: Schema<CalculateOrderResponse>;
