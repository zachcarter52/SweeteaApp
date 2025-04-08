import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { inventoryPhysicalCountSchema, } from './inventoryPhysicalCount';
export const retrieveInventoryPhysicalCountResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    count: ['count', optional(lazy(() => inventoryPhysicalCountSchema))],
});
//# sourceMappingURL=retrieveInventoryPhysicalCountResponse.js.map