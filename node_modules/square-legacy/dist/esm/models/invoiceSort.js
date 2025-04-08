import { object, optional, string } from '../schema';
export const invoiceSortSchema = object({
    field: ['field', string()],
    order: ['order', optional(string())],
});
//# sourceMappingURL=invoiceSort.js.map