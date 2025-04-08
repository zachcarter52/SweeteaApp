"use strict";
exports.__esModule = true;
exports.subscriptionTestResultSchema = void 0;
var schema_1 = require("../schema");
exports.subscriptionTestResultSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    statusCode: ['status_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    payload: ['payload', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=subscriptionTestResult.js.map