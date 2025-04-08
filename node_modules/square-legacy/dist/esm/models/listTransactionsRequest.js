import { nullable, object, optional, string } from '../schema';
export const listTransactionsRequestSchema = object({
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(string())],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listTransactionsRequest.js.map