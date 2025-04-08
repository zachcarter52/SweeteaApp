import { nullable, number, object, optional, string } from '../schema';
export const listWorkweekConfigsRequestSchema = object({
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listWorkweekConfigsRequest.js.map