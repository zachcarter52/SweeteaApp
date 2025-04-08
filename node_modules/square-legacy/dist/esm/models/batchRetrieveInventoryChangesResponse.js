import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { inventoryChangeSchema } from './inventoryChange';
export const batchRetrieveInventoryChangesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    changes: ['changes', optional(array(lazy(() => inventoryChangeSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=batchRetrieveInventoryChangesResponse.js.map