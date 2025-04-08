import { object, optional, string } from '../schema';
export const createInvoiceAttachmentRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    description: ['description', optional(string())],
});
//# sourceMappingURL=createInvoiceAttachmentRequest.js.map