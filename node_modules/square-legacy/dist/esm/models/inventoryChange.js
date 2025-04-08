import { lazy, object, optional, string } from '../schema';
import { catalogMeasurementUnitSchema, } from './catalogMeasurementUnit';
import { inventoryAdjustmentSchema, } from './inventoryAdjustment';
import { inventoryPhysicalCountSchema, } from './inventoryPhysicalCount';
import { inventoryTransferSchema, } from './inventoryTransfer';
export const inventoryChangeSchema = object({
    type: ['type', optional(string())],
    physicalCount: [
        'physical_count',
        optional(lazy(() => inventoryPhysicalCountSchema)),
    ],
    adjustment: ['adjustment', optional(lazy(() => inventoryAdjustmentSchema))],
    transfer: ['transfer', optional(lazy(() => inventoryTransferSchema))],
    measurementUnit: [
        'measurement_unit',
        optional(lazy(() => catalogMeasurementUnitSchema)),
    ],
    measurementUnitId: ['measurement_unit_id', optional(string())],
});
//# sourceMappingURL=inventoryChange.js.map