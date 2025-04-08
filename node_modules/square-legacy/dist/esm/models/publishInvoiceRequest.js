import { nullable, number, object, optional, string } from '../schema';
export const publishInvoiceRequestSchema = object({
    version: ['version', number()],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=publishInvoiceRequest.js.map