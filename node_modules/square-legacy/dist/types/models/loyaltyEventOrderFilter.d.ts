import { Schema } from '../schema';
/** Filter events by the order associated with the event. */
export interface LoyaltyEventOrderFilter {
    /** The ID of the [order](entity:Order) associated with the event. */
    orderId: string;
}
export declare const loyaltyEventOrderFilterSchema: Schema<LoyaltyEventOrderFilter>;
