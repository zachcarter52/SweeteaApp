import { dict, nullable, object, optional, string } from '../schema';
export const orderFulfillmentFulfillmentEntrySchema = object({
    uid: ['uid', optional(nullable(string()))],
    lineItemUid: ['line_item_uid', string()],
    quantity: ['quantity', string()],
    metadata: ['metadata', optional(nullable(dict(string())))],
});
//# sourceMappingURL=orderFulfillmentFulfillmentEntry.js.map