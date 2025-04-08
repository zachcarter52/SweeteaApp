import { nullable, number, object, optional, string } from '../schema';
export const listBreakTypesRequestSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listBreakTypesRequest.js.map