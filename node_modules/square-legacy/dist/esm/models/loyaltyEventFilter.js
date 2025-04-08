import { lazy, object, optional } from '../schema';
import { loyaltyEventDateTimeFilterSchema, } from './loyaltyEventDateTimeFilter';
import { loyaltyEventLocationFilterSchema, } from './loyaltyEventLocationFilter';
import { loyaltyEventLoyaltyAccountFilterSchema, } from './loyaltyEventLoyaltyAccountFilter';
import { loyaltyEventOrderFilterSchema, } from './loyaltyEventOrderFilter';
import { loyaltyEventTypeFilterSchema, } from './loyaltyEventTypeFilter';
export const loyaltyEventFilterSchema = object({
    loyaltyAccountFilter: [
        'loyalty_account_filter',
        optional(lazy(() => loyaltyEventLoyaltyAccountFilterSchema)),
    ],
    typeFilter: [
        'type_filter',
        optional(lazy(() => loyaltyEventTypeFilterSchema)),
    ],
    dateTimeFilter: [
        'date_time_filter',
        optional(lazy(() => loyaltyEventDateTimeFilterSchema)),
    ],
    locationFilter: [
        'location_filter',
        optional(lazy(() => loyaltyEventLocationFilterSchema)),
    ],
    orderFilter: [
        'order_filter',
        optional(lazy(() => loyaltyEventOrderFilterSchema)),
    ],
});
//# sourceMappingURL=loyaltyEventFilter.js.map