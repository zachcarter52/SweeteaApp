import { lazy, object, string } from '../schema';
import { catalogObjectSchema } from './catalogObject';
export const upsertCatalogObjectRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    object: ['object', lazy(() => catalogObjectSchema)],
});
//# sourceMappingURL=upsertCatalogObjectRequest.js.map