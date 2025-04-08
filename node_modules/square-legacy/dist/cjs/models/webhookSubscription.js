"use strict";
exports.__esModule = true;
exports.webhookSubscriptionSchema = void 0;
var schema_1 = require("../schema");
exports.webhookSubscriptionSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    enabled: ['enabled', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    eventTypes: ['event_types', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    notificationUrl: ['notification_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    apiVersion: ['api_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    signatureKey: ['signature_key', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=webhookSubscription.js.map