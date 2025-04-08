import { Schema } from '../schema';
/**
 * Defines the query parameters that can be included in
 * a request to the [ListRefunds](api-endpoint:Transactions-ListRefunds) endpoint.
 * Deprecated - recommend using [SearchOrders](api-endpoint:Orders-SearchOrders)
 */
export interface ListRefundsRequest {
    /**
     * The beginning of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.
     * Default value: The current time minus one year.
     */
    beginTime?: string | null;
    /**
     * The end of the requested reporting period, in RFC 3339 format.
     * See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.
     * Default value: The current time.
     */
    endTime?: string | null;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for your original query.
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string | null;
}
export declare const listRefundsRequestSchema: Schema<ListRefundsRequest>;
