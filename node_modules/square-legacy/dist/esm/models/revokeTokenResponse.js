import { array, boolean, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const revokeTokenResponseSchema = object({
    success: ['success', optional(boolean())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=revokeTokenResponse.js.map