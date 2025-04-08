import { nullable, number, object, optional, string } from '../schema';
export const listGiftCardActivitiesRequestSchema = object({
    giftCardId: ['gift_card_id', optional(nullable(string()))],
    type: ['type', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    beginTime: ['begin_time', optional(nullable(string()))],
    endTime: ['end_time', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(nullable(string()))],
});
//# sourceMappingURL=listGiftCardActivitiesRequest.js.map