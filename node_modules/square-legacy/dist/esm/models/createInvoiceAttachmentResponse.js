import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { invoiceAttachmentSchema, } from './invoiceAttachment';
export const createInvoiceAttachmentResponseSchema = object({
    attachment: ['attachment', optional(lazy(() => invoiceAttachmentSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createInvoiceAttachmentResponse.js.map