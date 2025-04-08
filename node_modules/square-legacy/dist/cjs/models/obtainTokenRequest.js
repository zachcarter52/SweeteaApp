"use strict";
exports.__esModule = true;
exports.obtainTokenRequestSchema = void 0;
var schema_1 = require("../schema");
exports.obtainTokenRequestSchema = (0, schema_1.object)({
    clientId: ['client_id', (0, schema_1.string)()],
    clientSecret: ['client_secret', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    code: ['code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    redirectUri: ['redirect_uri', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    grantType: ['grant_type', (0, schema_1.string)()],
    refreshToken: ['refresh_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    migrationToken: ['migration_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    scopes: ['scopes', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    shortLived: ['short_lived', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    codeVerifier: ['code_verifier', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=obtainTokenRequest.js.map