import { array, object, string } from '../schema';
export const bulkDeleteCustomersRequestSchema = object({ customerIds: ['customer_ids', array(string())] });
//# sourceMappingURL=bulkDeleteCustomersRequest.js.map