import { array, boolean, lazy, number, object, optional, string, } from '../schema';
import { catalogQuerySchema } from './catalogQuery';
export const searchCatalogObjectsRequestSchema = object({
    cursor: ['cursor', optional(string())],
    objectTypes: ['object_types', optional(array(string()))],
    includeDeletedObjects: ['include_deleted_objects', optional(boolean())],
    includeRelatedObjects: ['include_related_objects', optional(boolean())],
    beginTime: ['begin_time', optional(string())],
    query: ['query', optional(lazy(() => catalogQuerySchema))],
    limit: ['limit', optional(number())],
    includeCategoryPathToRoot: [
        'include_category_path_to_root',
        optional(boolean()),
    ],
});
//# sourceMappingURL=searchCatalogObjectsRequest.js.map