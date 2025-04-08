import { array, bigint, boolean, nullable, object, optional, string, } from '../schema';
export const batchRetrieveCatalogObjectsRequestSchema = object({
    objectIds: ['object_ids', array(string())],
    includeRelatedObjects: [
        'include_related_objects',
        optional(nullable(boolean())),
    ],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    includeDeletedObjects: [
        'include_deleted_objects',
        optional(nullable(boolean())),
    ],
    includeCategoryPathToRoot: [
        'include_category_path_to_root',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=batchRetrieveCatalogObjectsRequest.js.map