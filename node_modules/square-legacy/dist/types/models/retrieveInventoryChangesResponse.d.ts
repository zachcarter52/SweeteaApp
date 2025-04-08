import { Schema } from '../schema';
import { Error } from './error';
import { InventoryChange } from './inventoryChange';
export interface RetrieveInventoryChangesResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The set of inventory changes for the requested object and locations. */
    changes?: InventoryChange[];
    /**
     * The pagination cursor to be used in a subsequent request. If unset,
     * this is the final response.
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
}
export declare const retrieveInventoryChangesResponseSchema: Schema<RetrieveInventoryChangesResponse>;
