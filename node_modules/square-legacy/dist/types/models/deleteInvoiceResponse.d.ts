import { Schema } from '../schema';
import { Error } from './error';
/** Describes a `DeleteInvoice` response. */
export interface DeleteInvoiceResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const deleteInvoiceResponseSchema: Schema<DeleteInvoiceResponse>;
