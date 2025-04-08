"use strict";
exports.__esModule = true;
exports.listWebhookSubscriptionsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var webhookSubscription_1 = require("./webhookSubscription");
exports.listWebhookSubscriptionsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    subscriptions: [
        'subscriptions',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return webhookSubscription_1.webhookSubscriptionSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listWebhookSubscriptionsResponse.js.map