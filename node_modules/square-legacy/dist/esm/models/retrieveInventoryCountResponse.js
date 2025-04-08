import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { inventoryCountSchema } from './inventoryCount';
export const retrieveInventoryCountResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    counts: ['counts', optional(array(lazy(() => inventoryCountSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=retrieveInventoryCountResponse.js.map