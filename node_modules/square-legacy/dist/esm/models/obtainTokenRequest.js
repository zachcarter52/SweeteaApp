import { array, boolean, nullable, object, optional, string, } from '../schema';
export const obtainTokenRequestSchema = object({
    clientId: ['client_id', string()],
    clientSecret: ['client_secret', optional(nullable(string()))],
    code: ['code', optional(nullable(string()))],
    redirectUri: ['redirect_uri', optional(nullable(string()))],
    grantType: ['grant_type', string()],
    refreshToken: ['refresh_token', optional(nullable(string()))],
    migrationToken: ['migration_token', optional(nullable(string()))],
    scopes: ['scopes', optional(nullable(array(string())))],
    shortLived: ['short_lived', optional(nullable(boolean()))],
    codeVerifier: ['code_verifier', optional(nullable(string()))],
});
//# sourceMappingURL=obtainTokenRequest.js.map