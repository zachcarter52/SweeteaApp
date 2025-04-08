import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const batchDeleteCatalogObjectsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    deletedObjectIds: ['deleted_object_ids', optional(array(string()))],
    deletedAt: ['deleted_at', optional(string())],
});
//# sourceMappingURL=batchDeleteCatalogObjectsResponse.js.map