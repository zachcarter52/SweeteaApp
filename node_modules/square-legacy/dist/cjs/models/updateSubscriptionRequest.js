"use strict";
exports.__esModule = true;
exports.updateSubscriptionRequestSchema = void 0;
var schema_1 = require("../schema");
var subscription_1 = require("./subscription");
exports.updateSubscriptionRequestSchema = (0, schema_1.object)({ subscription: ['subscription', (0, schema_1.optional)((0, schema_1.lazy)(function () { return subscription_1.subscriptionSchema; }))] });
//# sourceMappingURL=updateSubscriptionRequest.js.map