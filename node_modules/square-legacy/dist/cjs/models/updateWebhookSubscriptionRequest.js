"use strict";
exports.__esModule = true;
exports.updateWebhookSubscriptionRequestSchema = void 0;
var schema_1 = require("../schema");
var webhookSubscription_1 = require("./webhookSubscription");
exports.updateWebhookSubscriptionRequestSchema = (0, schema_1.object)({
    subscription: [
        'subscription',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return webhookSubscription_1.webhookSubscriptionSchema; })),
    ]
});
//# sourceMappingURL=updateWebhookSubscriptionRequest.js.map