import { bigint, nullable, object, optional, string } from '../schema';
export const catalogObjectReferenceSchema = object({
    objectId: ['object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
});
//# sourceMappingURL=catalogObjectReference.js.map