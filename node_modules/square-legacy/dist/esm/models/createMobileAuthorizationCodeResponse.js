import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const createMobileAuthorizationCodeResponseSchema = object({
    authorizationCode: ['authorization_code', optional(string())],
    expiresAt: ['expires_at', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createMobileAuthorizationCodeResponse.js.map