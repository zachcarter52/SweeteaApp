import { array, lazy, object, optional } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const retrieveCatalogObjectResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    object: ['object', optional(lazy(() => catalogObjectSchema))],
    relatedObjects: [
        'related_objects',
        optional(array(lazy(() => catalogObjectSchema))),
    ],
});
//# sourceMappingURL=retrieveCatalogObjectResponse.js.map