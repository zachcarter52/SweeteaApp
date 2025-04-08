import { boolean, nullable, number, object, optional, string, } from '../schema';
export const listLocationCustomAttributesRequestSchema = object({
    visibilityFilter: ['visibility_filter', optional(string())],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    withDefinitions: ['with_definitions', optional(nullable(boolean()))],
});
//# sourceMappingURL=listLocationCustomAttributesRequest.js.map