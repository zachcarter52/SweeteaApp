import { array, lazy, object, optional } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const batchRetrieveCatalogObjectsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    objects: ['objects', optional(array(lazy(() => catalogObjectSchema)))],
    relatedObjects: [
        'related_objects',
        optional(array(lazy(() => catalogObjectSchema))),
    ],
});
//# sourceMappingURL=batchRetrieveCatalogObjectsResponse.js.map