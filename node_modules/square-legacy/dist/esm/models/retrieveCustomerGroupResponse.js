import { array, lazy, object, optional } from '../schema';
import { customerGroupSchema } from './customerGroup';
import { errorSchema } from './error';
export const retrieveCustomerGroupResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    group: ['group', optional(lazy(() => customerGroupSchema))],
});
//# sourceMappingURL=retrieveCustomerGroupResponse.js.map