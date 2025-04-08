import { Schema } from '../schema';
import { Dispute } from './dispute';
import { Error } from './error';
/** Defines fields in a `ListDisputes` response. */
export interface ListDisputesResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** The list of disputes. */
    disputes?: Dispute[];
    /**
     * The pagination cursor to be used in a subsequent request.
     * If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const listDisputesResponseSchema: Schema<ListDisputesResponse>;
