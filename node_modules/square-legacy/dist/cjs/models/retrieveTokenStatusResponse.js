"use strict";
exports.__esModule = true;
exports.retrieveTokenStatusResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.retrieveTokenStatusResponseSchema = (0, schema_1.object)({
    scopes: ['scopes', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    expiresAt: ['expires_at', (0, schema_1.optional)((0, schema_1.string)())],
    clientId: ['client_id', (0, schema_1.optional)((0, schema_1.string)())],
    merchantId: ['merchant_id', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=retrieveTokenStatusResponse.js.map