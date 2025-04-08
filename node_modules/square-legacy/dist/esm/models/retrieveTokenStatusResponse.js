import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const retrieveTokenStatusResponseSchema = object({
    scopes: ['scopes', optional(array(string()))],
    expiresAt: ['expires_at', optional(string())],
    clientId: ['client_id', optional(string())],
    merchantId: ['merchant_id', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveTokenStatusResponse.js.map