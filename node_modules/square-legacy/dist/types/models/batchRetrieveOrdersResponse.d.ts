import { Schema } from '../schema';
import { Error } from './error';
import { Order } from './order';
/**
 * Defines the fields that are included in the response body of
 * a request to the `BatchRetrieveOrders` endpoint.
 */
export interface BatchRetrieveOrdersResponse {
    /** The requested orders. This will omit any requested orders that do not exist. */
    orders?: Order[];
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const batchRetrieveOrdersResponseSchema: Schema<BatchRetrieveOrdersResponse>;
