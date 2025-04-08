import { array, lazy, object, optional } from '../schema';
import { catalogIdMappingSchema } from './catalogIdMapping';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const upsertCatalogObjectResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    catalogObject: [
        'catalog_object',
        optional(lazy(() => catalogObjectSchema)),
    ],
    idMappings: [
        'id_mappings',
        optional(array(lazy(() => catalogIdMappingSchema))),
    ],
});
//# sourceMappingURL=upsertCatalogObjectResponse.js.map