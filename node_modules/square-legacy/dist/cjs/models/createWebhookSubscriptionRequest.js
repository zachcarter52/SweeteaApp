"use strict";
exports.__esModule = true;
exports.createWebhookSubscriptionRequestSchema = void 0;
var schema_1 = require("../schema");
var webhookSubscription_1 = require("./webhookSubscription");
exports.createWebhookSubscriptionRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    subscription: ['subscription', (0, schema_1.lazy)(function () { return webhookSubscription_1.webhookSubscriptionSchema; })]
});
//# sourceMappingURL=createWebhookSubscriptionRequest.js.map