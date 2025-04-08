import { Schema } from '../schema';
/**
 * Represents a set of query expressions (filters) to narrow the scope of targeted subscriptions returned by
 * the [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) endpoint.
 */
export interface SearchSubscriptionsFilter {
    /** A filter to select subscriptions based on the subscribing customer IDs. */
    customerIds?: string[] | null;
    /** A filter to select subscriptions based on the location. */
    locationIds?: string[] | null;
    /** A filter to select subscriptions based on the source application. */
    sourceNames?: string[] | null;
}
export declare const searchSubscriptionsFilterSchema: Schema<SearchSubscriptionsFilter>;
