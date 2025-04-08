import { array, lazy, object, string } from '../schema';
import { catalogObjectBatchSchema, } from './catalogObjectBatch';
export const batchUpsertCatalogObjectsRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    batches: ['batches', array(lazy(() => catalogObjectBatchSchema))],
});
//# sourceMappingURL=batchUpsertCatalogObjectsRequest.js.map