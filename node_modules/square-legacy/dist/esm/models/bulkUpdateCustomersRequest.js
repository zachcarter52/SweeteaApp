import { dict, lazy, object } from '../schema';
import { bulkUpdateCustomerDataSchema, } from './bulkUpdateCustomerData';
export const bulkUpdateCustomersRequestSchema = object({ customers: ['customers', dict(lazy(() => bulkUpdateCustomerDataSchema))] });
//# sourceMappingURL=bulkUpdateCustomersRequest.js.map