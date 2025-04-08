import { array, bigint, lazy, object, optional, string, } from '../schema';
import { customerSchema } from './customer';
import { errorSchema } from './error';
export const searchCustomersResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customers: ['customers', optional(array(lazy(() => customerSchema)))],
    cursor: ['cursor', optional(string())],
    count: ['count', optional(bigint())],
});
//# sourceMappingURL=searchCustomersResponse.js.map