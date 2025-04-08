import { boolean, nullable, number, object, optional, string, } from '../schema';
export const listOrderCustomAttributesRequestSchema = object({
    visibilityFilter: ['visibility_filter', optional(string())],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    withDefinitions: ['with_definitions', optional(nullable(boolean()))],
});
//# sourceMappingURL=listOrderCustomAttributesRequest.js.map