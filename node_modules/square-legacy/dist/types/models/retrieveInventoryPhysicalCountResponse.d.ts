import { Schema } from '../schema';
import { Error } from './error';
import { InventoryPhysicalCount } from './inventoryPhysicalCount';
export interface RetrieveInventoryPhysicalCountResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents the quantity of an item variation that is physically present
     * at a specific location, verified by a seller or a seller's employee. For example,
     * a physical count might come from an employee counting the item variations on
     * hand or from syncing with an external system.
     */
    count?: InventoryPhysicalCount;
}
export declare const retrieveInventoryPhysicalCountResponseSchema: Schema<RetrieveInventoryPhysicalCountResponse>;
