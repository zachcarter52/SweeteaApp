import { Schema } from '../schema';
import { Error } from './error';
import { Invoice } from './invoice';
/** Describes a `ListInvoice` response. */
export interface ListInvoicesResponse {
    /** The invoices retrieved. */
    invoices?: Invoice[];
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     * subsequent request to retrieve the next set of invoices. If empty, this is the final
     * response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const listInvoicesResponseSchema: Schema<ListInvoicesResponse>;
