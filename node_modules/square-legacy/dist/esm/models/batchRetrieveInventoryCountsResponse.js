import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { inventoryCountSchema } from './inventoryCount';
export const batchRetrieveInventoryCountsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    counts: ['counts', optional(array(lazy(() => inventoryCountSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=batchRetrieveInventoryCountsResponse.js.map