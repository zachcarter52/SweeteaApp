import { Schema } from '../schema';
import { SearchSubscriptionsFilter } from './searchSubscriptionsFilter';
/** Represents a query, consisting of specified query expressions, used to search for subscriptions. */
export interface SearchSubscriptionsQuery {
    /**
     * Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions returned by
     * the [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) endpoint.
     */
    filter?: SearchSubscriptionsFilter;
}
export declare const searchSubscriptionsQuerySchema: Schema<SearchSubscriptionsQuery>;
