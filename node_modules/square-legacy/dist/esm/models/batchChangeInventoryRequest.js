import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { inventoryChangeSchema } from './inventoryChange';
export const batchChangeInventoryRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    changes: [
        'changes',
        optional(nullable(array(lazy(() => inventoryChangeSchema)))),
    ],
    ignoreUnchangedCounts: [
        'ignore_unchanged_counts',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=batchChangeInventoryRequest.js.map