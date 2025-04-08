import { array, lazy, object, optional } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const createCatalogImageResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    image: ['image', optional(lazy(() => catalogObjectSchema))],
});
//# sourceMappingURL=createCatalogImageResponse.js.map