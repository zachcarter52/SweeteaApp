import { Schema } from '../schema';
import { LoyaltyEventDateTimeFilter } from './loyaltyEventDateTimeFilter';
import { LoyaltyEventLocationFilter } from './loyaltyEventLocationFilter';
import { LoyaltyEventLoyaltyAccountFilter } from './loyaltyEventLoyaltyAccountFilter';
import { LoyaltyEventOrderFilter } from './loyaltyEventOrderFilter';
import { LoyaltyEventTypeFilter } from './loyaltyEventTypeFilter';
/**
 * The filtering criteria. If the request specifies multiple filters,
 * the endpoint uses a logical AND to evaluate them.
 */
export interface LoyaltyEventFilter {
    /** Filter events by loyalty account. */
    loyaltyAccountFilter?: LoyaltyEventLoyaltyAccountFilter;
    /** Filter events by event type. */
    typeFilter?: LoyaltyEventTypeFilter;
    /** Filter events by date time range. */
    dateTimeFilter?: LoyaltyEventDateTimeFilter;
    /** Filter events by location. */
    locationFilter?: LoyaltyEventLocationFilter;
    /** Filter events by the order associated with the event. */
    orderFilter?: LoyaltyEventOrderFilter;
}
export declare const loyaltyEventFilterSchema: Schema<LoyaltyEventFilter>;
