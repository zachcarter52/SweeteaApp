import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteInvoiceAttachmentResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteInvoiceAttachmentResponse.js.map