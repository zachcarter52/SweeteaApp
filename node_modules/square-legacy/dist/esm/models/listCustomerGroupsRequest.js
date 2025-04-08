import { nullable, number, object, optional, string } from '../schema';
export const listCustomerGroupsRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listCustomerGroupsRequest.js.map