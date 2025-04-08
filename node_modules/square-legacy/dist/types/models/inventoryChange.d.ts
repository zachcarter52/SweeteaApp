import { Schema } from '../schema';
import { CatalogMeasurementUnit } from './catalogMeasurementUnit';
import { InventoryAdjustment } from './inventoryAdjustment';
import { InventoryPhysicalCount } from './inventoryPhysicalCount';
import { InventoryTransfer } from './inventoryTransfer';
/**
 * Represents a single physical count, inventory, adjustment, or transfer
 * that is part of the history of inventory changes for a particular
 * [CatalogObject]($m/CatalogObject) instance.
 */
export interface InventoryChange {
    /** Indicates how the inventory change was applied to a tracked product quantity. */
    type?: string;
    /**
     * Represents the quantity of an item variation that is physically present
     * at a specific location, verified by a seller or a seller's employee. For example,
     * a physical count might come from an employee counting the item variations on
     * hand or from syncing with an external system.
     */
    physicalCount?: InventoryPhysicalCount;
    /**
     * Represents a change in state or quantity of product inventory at a
     * particular time and location.
     */
    adjustment?: InventoryAdjustment;
    /**
     * Represents the transfer of a quantity of product inventory at a
     * particular time from one location to another.
     */
    transfer?: InventoryTransfer;
    /**
     * Represents the unit used to measure a `CatalogItemVariation` and
     * specifies the precision for decimal quantities.
     */
    measurementUnit?: CatalogMeasurementUnit;
    /** The ID of the [CatalogMeasurementUnit](entity:CatalogMeasurementUnit) object representing the catalog measurement unit associated with the inventory change. */
    measurementUnitId?: string;
}
export declare const inventoryChangeSchema: Schema<InventoryChange>;
