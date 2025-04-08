import { nullable, object, optional, string } from '../schema';
export const listRefundsRequestSchema = object({
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(string())],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listRefundsRequest.js.map