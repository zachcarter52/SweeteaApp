import { bigint, nullable, object, optional, string } from '../schema';
export const listCatalogRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    types: ['types', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
});
//# sourceMappingURL=listCatalogRequest.js.map