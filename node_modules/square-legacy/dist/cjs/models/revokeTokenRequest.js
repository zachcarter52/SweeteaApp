"use strict";
exports.__esModule = true;
exports.revokeTokenRequestSchema = void 0;
var schema_1 = require("../schema");
exports.revokeTokenRequestSchema = (0, schema_1.object)({
    clientId: ['client_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    accessToken: ['access_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    merchantId: ['merchant_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    revokeOnlyAccessToken: [
        'revoke_only_access_token',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=revokeTokenRequest.js.map