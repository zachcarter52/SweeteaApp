import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { inventoryAdjustmentSchema, } from './inventoryAdjustment';
export const retrieveInventoryAdjustmentResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    adjustment: ['adjustment', optional(lazy(() => inventoryAdjustmentSchema))],
});
//# sourceMappingURL=retrieveInventoryAdjustmentResponse.js.map