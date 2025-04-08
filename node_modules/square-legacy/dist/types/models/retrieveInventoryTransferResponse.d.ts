import { Schema } from '../schema';
import { Error } from './error';
import { InventoryTransfer } from './inventoryTransfer';
export interface RetrieveInventoryTransferResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents the transfer of a quantity of product inventory at a
     * particular time from one location to another.
     */
    transfer?: InventoryTransfer;
}
export declare const retrieveInventoryTransferResponseSchema: Schema<RetrieveInventoryTransferResponse>;
