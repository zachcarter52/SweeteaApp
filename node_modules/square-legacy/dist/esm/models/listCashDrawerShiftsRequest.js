import { nullable, number, object, optional, string } from '../schema';
export const listCashDrawerShiftsRequestSchema = object({
    locationId: ['location_id', string()],
    sortOrder: ['sort_order', optional(string())],
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listCashDrawerShiftsRequest.js.map