import { array, lazy, object, optional } from '../schema';
import { customerGroupSchema } from './customerGroup';
import { errorSchema } from './error';
export const updateCustomerGroupResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    group: ['group', optional(lazy(() => customerGroupSchema))],
});
//# sourceMappingURL=updateCustomerGroupResponse.js.map