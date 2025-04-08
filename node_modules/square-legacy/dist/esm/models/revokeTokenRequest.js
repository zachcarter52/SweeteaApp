import { boolean, nullable, object, optional, string } from '../schema';
export const revokeTokenRequestSchema = object({
    clientId: ['client_id', optional(nullable(string()))],
    accessToken: ['access_token', optional(nullable(string()))],
    merchantId: ['merchant_id', optional(nullable(string()))],
    revokeOnlyAccessToken: [
        'revoke_only_access_token',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=revokeTokenRequest.js.map