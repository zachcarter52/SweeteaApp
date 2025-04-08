import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const registerDomainResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    status: ['status', optional(string())],
});
//# sourceMappingURL=registerDomainResponse.js.map