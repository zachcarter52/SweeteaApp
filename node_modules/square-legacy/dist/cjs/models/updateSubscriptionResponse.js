"use strict";
exports.__esModule = true;
exports.updateSubscriptionResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var subscription_1 = require("./subscription");
exports.updateSubscriptionResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    subscription: ['subscription', (0, schema_1.optional)((0, schema_1.lazy)(function () { return subscription_1.subscriptionSchema; }))]
});
//# sourceMappingURL=updateSubscriptionResponse.js.map