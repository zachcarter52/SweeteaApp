import { Schema } from '../schema';
import { Error } from './error';
import { InvoiceAttachment } from './invoiceAttachment';
/** Represents a [CreateInvoiceAttachment]($e/Invoices/CreateInvoiceAttachment) response. */
export interface CreateInvoiceAttachmentResponse {
    /** Represents a file attached to an [invoice]($m/Invoice). */
    attachment?: InvoiceAttachment;
    /** Information about errors encountered during the request. */
    errors?: Error[];
}
export declare const createInvoiceAttachmentResponseSchema: Schema<CreateInvoiceAttachmentResponse>;
