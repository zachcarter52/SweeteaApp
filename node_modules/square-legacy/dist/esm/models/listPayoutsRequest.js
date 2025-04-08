import { nullable, number, object, optional, string } from '../schema';
export const listPayoutsRequestSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    status: ['status', optional(string())],
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(string())],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listPayoutsRequest.js.map