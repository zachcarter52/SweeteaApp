import { array, lazy, object, optional, string } from '../schema';
import { customerGroupSchema } from './customerGroup';
import { errorSchema } from './error';
export const listCustomerGroupsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    groups: ['groups', optional(array(lazy(() => customerGroupSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listCustomerGroupsResponse.js.map