import { boolean, nullable, number, object, optional, string, } from '../schema';
export const listCustomersRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    sortField: ['sort_field', optional(string())],
    sortOrder: ['sort_order', optional(string())],
    count: ['count', optional(nullable(boolean()))],
});
//# sourceMappingURL=listCustomersRequest.js.map