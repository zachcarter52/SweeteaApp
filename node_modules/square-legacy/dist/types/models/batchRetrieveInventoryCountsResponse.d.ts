import { Schema } from '../schema';
import { Error } from './error';
import { InventoryCount } from './inventoryCount';
export interface BatchRetrieveInventoryCountsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * The current calculated inventory counts for the requested objects
     * and locations.
     */
    counts?: InventoryCount[];
    /**
     * The pagination cursor to be used in a subsequent request. If unset,
     * this is the final response.
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
}
export declare const batchRetrieveInventoryCountsResponseSchema: Schema<BatchRetrieveInventoryCountsResponse>;
