import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { invoiceSchema } from './invoice';
export const listInvoicesResponseSchema = object({
    invoices: ['invoices', optional(array(lazy(() => invoiceSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listInvoicesResponse.js.map