import { Schema } from '../schema';
import { Error } from './error';
import { Payout } from './payout';
/** The response to retrieve payout records entries. */
export interface ListPayoutsResponse {
    /** The requested list of payouts. */
    payouts?: Payout[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const listPayoutsResponseSchema: Schema<ListPayoutsResponse>;
