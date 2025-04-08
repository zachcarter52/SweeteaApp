import { array, lazy, object, optional, string } from '../schema';
import { catalogIdMappingSchema } from './catalogIdMapping';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const batchUpsertCatalogObjectsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    objects: ['objects', optional(array(lazy(() => catalogObjectSchema)))],
    updatedAt: ['updated_at', optional(string())],
    idMappings: [
        'id_mappings',
        optional(array(lazy(() => catalogIdMappingSchema))),
    ],
});
//# sourceMappingURL=batchUpsertCatalogObjectsResponse.js.map