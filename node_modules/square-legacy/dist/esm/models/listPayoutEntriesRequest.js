import { nullable, number, object, optional, string } from '../schema';
export const listPayoutEntriesRequestSchema = object({
    sortOrder: ['sort_order', optional(string())],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listPayoutEntriesRequest.js.map