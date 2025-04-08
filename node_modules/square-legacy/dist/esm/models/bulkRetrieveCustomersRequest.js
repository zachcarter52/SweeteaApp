import { array, object, string } from '../schema';
export const bulkRetrieveCustomersRequestSchema = object({ customerIds: ['customer_ids', array(string())] });
//# sourceMappingURL=bulkRetrieveCustomersRequest.js.map