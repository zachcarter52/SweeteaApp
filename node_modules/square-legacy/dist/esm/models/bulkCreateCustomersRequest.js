import { dict, lazy, object } from '../schema';
import { bulkCreateCustomerDataSchema, } from './bulkCreateCustomerData';
export const bulkCreateCustomersRequestSchema = object({ customers: ['customers', dict(lazy(() => bulkCreateCustomerDataSchema))] });
//# sourceMappingURL=bulkCreateCustomersRequest.js.map