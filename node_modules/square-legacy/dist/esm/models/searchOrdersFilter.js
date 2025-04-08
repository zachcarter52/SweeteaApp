import { lazy, object, optional } from '../schema';
import { searchOrdersCustomerFilterSchema, } from './searchOrdersCustomerFilter';
import { searchOrdersDateTimeFilterSchema, } from './searchOrdersDateTimeFilter';
import { searchOrdersFulfillmentFilterSchema, } from './searchOrdersFulfillmentFilter';
import { searchOrdersSourceFilterSchema, } from './searchOrdersSourceFilter';
import { searchOrdersStateFilterSchema, } from './searchOrdersStateFilter';
export const searchOrdersFilterSchema = object({
    stateFilter: [
        'state_filter',
        optional(lazy(() => searchOrdersStateFilterSchema)),
    ],
    dateTimeFilter: [
        'date_time_filter',
        optional(lazy(() => searchOrdersDateTimeFilterSchema)),
    ],
    fulfillmentFilter: [
        'fulfillment_filter',
        optional(lazy(() => searchOrdersFulfillmentFilterSchema)),
    ],
    sourceFilter: [
        'source_filter',
        optional(lazy(() => searchOrdersSourceFilterSchema)),
    ],
    customerFilter: [
        'customer_filter',
        optional(lazy(() => searchOrdersCustomerFilterSchema)),
    ],
});
//# sourceMappingURL=searchOrdersFilter.js.map