import { lazy, object, optional, string } from '../schema';
import { invoiceSchema } from './invoice';
export const createInvoiceRequestSchema = object({
    invoice: ['invoice', lazy(() => invoiceSchema)],
    idempotencyKey: ['idempotency_key', optional(string())],
});
//# sourceMappingURL=createInvoiceRequest.js.map