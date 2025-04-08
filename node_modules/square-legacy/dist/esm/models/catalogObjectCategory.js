import { bigint, nullable, object, optional, string } from '../schema';
export const catalogObjectCategorySchema = object({
    id: ['id', optional(string())],
    ordinal: ['ordinal', optional(nullable(bigint()))],
});
//# sourceMappingURL=catalogObjectCategory.js.map