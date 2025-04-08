import { nullable, number, object, optional, string } from '../schema';
export const listPaymentRefundsRequestSchema = object({
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(nullable(string()))],
    cursor: ['cursor', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    status: ['status', optional(nullable(string()))],
    sourceType: ['source_type', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listPaymentRefundsRequest.js.map