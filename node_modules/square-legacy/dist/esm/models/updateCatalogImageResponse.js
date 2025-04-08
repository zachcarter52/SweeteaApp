import { array, lazy, object, optional } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const updateCatalogImageResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    image: ['image', optional(lazy(() => catalogObjectSchema))],
});
//# sourceMappingURL=updateCatalogImageResponse.js.map