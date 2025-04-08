import { nullable, number, object, optional, string } from '../schema';
export const listOrderCustomAttributeDefinitionsRequestSchema = object({
    visibilityFilter: ['visibility_filter', optional(string())],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listOrderCustomAttributeDefinitionsRequest.js.map