import { Schema } from '../schema';
import { SearchOrdersCustomerFilter } from './searchOrdersCustomerFilter';
import { SearchOrdersDateTimeFilter } from './searchOrdersDateTimeFilter';
import { SearchOrdersFulfillmentFilter } from './searchOrdersFulfillmentFilter';
import { SearchOrdersSourceFilter } from './searchOrdersSourceFilter';
import { SearchOrdersStateFilter } from './searchOrdersStateFilter';
/**
 * Filtering criteria to use for a `SearchOrders` request. Multiple filters
 * are ANDed together.
 */
export interface SearchOrdersFilter {
    /** Filter by the current order `state`. */
    stateFilter?: SearchOrdersStateFilter;
    /**
     * Filter for `Order` objects based on whether their `CREATED_AT`,
     * `CLOSED_AT`, or `UPDATED_AT` timestamps fall within a specified time range.
     * You can specify the time range and which timestamp to filter for. You can filter
     * for only one time range at a time.
     * For each time range, the start time and end time are inclusive. If the end time
     * is absent, it defaults to the time of the first request for the cursor.
     * __Important:__ If you use the `DateTimeFilter` in a `SearchOrders` query,
     * you must set the `sort_field` in [OrdersSort]($m/SearchOrdersSort)
     * to the same field you filter for. For example, if you set the `CLOSED_AT` field
     * in `DateTimeFilter`, you must set the `sort_field` in `SearchOrdersSort` to
     * `CLOSED_AT`. Otherwise, `SearchOrders` throws an error.
     * [Learn more about filtering orders by time range.](https://developer.squareup.com/docs/orders-api/manage-orders/search-orders#important-note-about-filtering-orders-by-time-range)
     */
    dateTimeFilter?: SearchOrdersDateTimeFilter;
    /** Filter based on [order fulfillment]($m/Fulfillment) information. */
    fulfillmentFilter?: SearchOrdersFulfillmentFilter;
    /** A filter based on order `source` information. */
    sourceFilter?: SearchOrdersSourceFilter;
    /**
     * A filter based on the order `customer_id` and any tender `customer_id`
     * associated with the order. It does not filter based on the
     * [FulfillmentRecipient]($m/FulfillmentRecipient) `customer_id`.
     */
    customerFilter?: SearchOrdersCustomerFilter;
}
export declare const searchOrdersFilterSchema: Schema<SearchOrdersFilter>;
