"use strict";
exports.__esModule = true;
exports.retrieveWebhookSubscriptionResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var webhookSubscription_1 = require("./webhookSubscription");
exports.retrieveWebhookSubscriptionResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    subscription: [
        'subscription',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return webhookSubscription_1.webhookSubscriptionSchema; })),
    ]
});
//# sourceMappingURL=retrieveWebhookSubscriptionResponse.js.map