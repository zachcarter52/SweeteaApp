import { bigint, boolean, nullable, object, optional } from '../schema';
export const retrieveCatalogObjectRequestSchema = object({
    includeRelatedObjects: [
        'include_related_objects',
        optional(nullable(boolean())),
    ],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    includeCategoryPathToRoot: [
        'include_category_path_to_root',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=retrieveCatalogObjectRequest.js.map