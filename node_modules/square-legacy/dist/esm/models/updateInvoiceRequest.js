import { array, lazy, nullable, object, optional, string, } from '../schema';
import { invoiceSchema } from './invoice';
export const updateInvoiceRequestSchema = object({
    invoice: ['invoice', lazy(() => invoiceSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
    fieldsToClear: ['fields_to_clear', optional(nullable(array(string())))],
});
//# sourceMappingURL=updateInvoiceRequest.js.map