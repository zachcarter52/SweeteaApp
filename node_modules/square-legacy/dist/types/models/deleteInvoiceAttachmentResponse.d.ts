import { Schema } from '../schema';
import { Error } from './error';
/** Represents a [DeleteInvoiceAttachment]($e/Invoices/DeleteInvoiceAttachment) response. */
export interface DeleteInvoiceAttachmentResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const deleteInvoiceAttachmentResponseSchema: Schema<DeleteInvoiceAttachmentResponse>;
