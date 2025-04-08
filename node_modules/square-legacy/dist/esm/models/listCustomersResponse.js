import { array, bigint, lazy, object, optional, string, } from '../schema';
import { customerSchema } from './customer';
import { errorSchema } from './error';
export const listCustomersResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customers: ['customers', optional(array(lazy(() => customerSchema)))],
    cursor: ['cursor', optional(string())],
    count: ['count', optional(bigint())],
});
//# sourceMappingURL=listCustomersResponse.js.map