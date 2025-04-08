import { nullable, object, optional, string } from '../schema';
export const orderFulfillmentUpdatedUpdateSchema = object({
    fulfillmentUid: ['fulfillment_uid', optional(nullable(string()))],
    oldState: ['old_state', optional(string())],
    newState: ['new_state', optional(string())],
});
//# sourceMappingURL=orderFulfillmentUpdatedUpdate.js.map