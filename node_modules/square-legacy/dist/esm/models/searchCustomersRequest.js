import { bigint, boolean, lazy, object, optional, string, } from '../schema';
import { customerQuerySchema } from './customerQuery';
export const searchCustomersRequestSchema = object({
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(bigint())],
    query: ['query', optional(lazy(() => customerQuerySchema))],
    count: ['count', optional(boolean())],
});
//# sourceMappingURL=searchCustomersRequest.js.map