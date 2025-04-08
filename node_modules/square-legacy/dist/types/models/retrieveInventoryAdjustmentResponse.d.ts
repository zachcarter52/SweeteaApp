import { Schema } from '../schema';
import { Error } from './error';
import { InventoryAdjustment } from './inventoryAdjustment';
export interface RetrieveInventoryAdjustmentResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents a change in state or quantity of product inventory at a
     * particular time and location.
     */
    adjustment?: InventoryAdjustment;
}
export declare const retrieveInventoryAdjustmentResponseSchema: Schema<RetrieveInventoryAdjustmentResponse>;
