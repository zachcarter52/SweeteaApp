import { lazy, number, object, optional, string } from '../schema';
import { invoiceQuerySchema } from './invoiceQuery';
export const searchInvoicesRequestSchema = object({
    query: ['query', lazy(() => invoiceQuerySchema)],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchInvoicesRequest.js.map