import { array, nullable, object, optional, string } from '../schema';
export const invoiceFilterSchema = object({
    locationIds: ['location_ids', array(string())],
    customerIds: ['customer_ids', optional(nullable(array(string())))],
});
//# sourceMappingURL=invoiceFilter.js.map