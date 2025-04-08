"use strict";
exports.__esModule = true;
exports.obtainTokenResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.obtainTokenResponseSchema = (0, schema_1.object)({
    accessToken: ['access_token', (0, schema_1.optional)((0, schema_1.string)())],
    tokenType: ['token_type', (0, schema_1.optional)((0, schema_1.string)())],
    expiresAt: ['expires_at', (0, schema_1.optional)((0, schema_1.string)())],
    merchantId: ['merchant_id', (0, schema_1.optional)((0, schema_1.string)())],
    subscriptionId: ['subscription_id', (0, schema_1.optional)((0, schema_1.string)())],
    planId: ['plan_id', (0, schema_1.optional)((0, schema_1.string)())],
    idToken: ['id_token', (0, schema_1.optional)((0, schema_1.string)())],
    refreshToken: ['refresh_token', (0, schema_1.optional)((0, schema_1.string)())],
    shortLived: ['short_lived', (0, schema_1.optional)((0, schema_1.boolean)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    refreshTokenExpiresAt: ['refresh_token_expires_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=obtainTokenResponse.js.map