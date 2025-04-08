"use strict";
exports.__esModule = true;
exports.listWebhookSubscriptionsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listWebhookSubscriptionsRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    includeDisabled: ['include_disabled', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=listWebhookSubscriptionsRequest.js.map