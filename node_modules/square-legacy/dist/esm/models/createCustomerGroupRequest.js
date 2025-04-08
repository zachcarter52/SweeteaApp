import { lazy, object, optional, string } from '../schema';
import { customerGroupSchema } from './customerGroup';
export const createCustomerGroupRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    group: ['group', lazy(() => customerGroupSchema)],
});
//# sourceMappingURL=createCustomerGroupRequest.js.map