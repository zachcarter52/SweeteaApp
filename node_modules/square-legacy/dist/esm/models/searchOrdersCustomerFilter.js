import { array, nullable, object, optional, string } from '../schema';
export const searchOrdersCustomerFilterSchema = object({ customerIds: ['customer_ids', optional(nullable(array(string())))] });
//# sourceMappingURL=searchOrdersCustomerFilter.js.map