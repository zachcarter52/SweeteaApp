import { lazy, object } from '../schema';
import { customerGroupSchema } from './customerGroup';
export const updateCustomerGroupRequestSchema = object({ group: ['group', lazy(() => customerGroupSchema)] });
//# sourceMappingURL=updateCustomerGroupRequest.js.map