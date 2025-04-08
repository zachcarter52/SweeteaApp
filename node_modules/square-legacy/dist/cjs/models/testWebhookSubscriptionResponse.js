"use strict";
exports.__esModule = true;
exports.testWebhookSubscriptionResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var subscriptionTestResult_1 = require("./subscriptionTestResult");
exports.testWebhookSubscriptionResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    subscriptionTestResult: [
        'subscription_test_result',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return subscriptionTestResult_1.subscriptionTestResultSchema; })),
    ]
});
//# sourceMappingURL=testWebhookSubscriptionResponse.js.map