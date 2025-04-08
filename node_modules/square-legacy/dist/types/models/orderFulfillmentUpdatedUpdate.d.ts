import { Schema } from '../schema';
/** Information about fulfillment updates. */
export interface OrderFulfillmentUpdatedUpdate {
    /** A unique ID that identifies the fulfillment only within this order. */
    fulfillmentUid?: string | null;
    /** The current state of this fulfillment. */
    oldState?: string;
    /** The current state of this fulfillment. */
    newState?: string;
}
export declare const orderFulfillmentUpdatedUpdateSchema: Schema<OrderFulfillmentUpdatedUpdate>;
