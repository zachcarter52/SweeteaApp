import { array, lazy, object, optional, string } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const listCatalogResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cursor: ['cursor', optional(string())],
    objects: ['objects', optional(array(lazy(() => catalogObjectSchema)))],
});
//# sourceMappingURL=listCatalogResponse.js.map