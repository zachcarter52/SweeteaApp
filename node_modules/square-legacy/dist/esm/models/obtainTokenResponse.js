import { array, boolean, lazy, object, optional, string, } from '../schema';
import { errorSchema } from './error';
export const obtainTokenResponseSchema = object({
    accessToken: ['access_token', optional(string())],
    tokenType: ['token_type', optional(string())],
    expiresAt: ['expires_at', optional(string())],
    merchantId: ['merchant_id', optional(string())],
    subscriptionId: ['subscription_id', optional(string())],
    planId: ['plan_id', optional(string())],
    idToken: ['id_token', optional(string())],
    refreshToken: ['refresh_token', optional(string())],
    shortLived: ['short_lived', optional(boolean())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refreshTokenExpiresAt: ['refresh_token_expires_at', optional(string())],
});
//# sourceMappingURL=obtainTokenResponse.js.map