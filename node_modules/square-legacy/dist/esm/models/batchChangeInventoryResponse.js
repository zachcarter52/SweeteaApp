import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { inventoryChangeSchema } from './inventoryChange';
import { inventoryCountSchema } from './inventoryCount';
export const batchChangeInventoryResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    counts: ['counts', optional(array(lazy(() => inventoryCountSchema)))],
    changes: ['changes', optional(array(lazy(() => inventoryChangeSchema)))],
});
//# sourceMappingURL=batchChangeInventoryResponse.js.map