import { array, lazy, object, optional, string } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { errorSchema } from './error';
export const searchCatalogItemsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    items: ['items', optional(array(lazy(() => catalogObjectSchema)))],
    cursor: ['cursor', optional(string())],
    matchedVariationIds: ['matched_variation_ids', optional(array(string()))],
});
//# sourceMappingURL=searchCatalogItemsResponse.js.map