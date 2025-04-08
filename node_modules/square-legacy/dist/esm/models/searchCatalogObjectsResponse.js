import { array, lazy, object, optional, string } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const searchCatalogObjectsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cursor: ['cursor', optional(string())],
    objects: ['objects', optional(array(lazy(() => catalogObjectSchema)))],
    relatedObjects: [
        'related_objects',
        optional(array(lazy(() => catalogObjectSchema))),
    ],
    latestTime: ['latest_time', optional(string())],
});
//# sourceMappingURL=searchCatalogObjectsResponse.js.map