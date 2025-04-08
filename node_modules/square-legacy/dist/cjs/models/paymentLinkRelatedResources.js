"use strict";
exports.__esModule = true;
exports.paymentLinkRelatedResourcesSchema = void 0;
var schema_1 = require("../schema");
var catalogObject_1 = require("./catalogObject");
var order_1 = require("./order");
exports.paymentLinkRelatedResourcesSchema = (0, schema_1.object)({
    orders: ['orders', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return order_1.orderSchema; }))))],
    subscriptionPlans: [
        'subscription_plans',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; })))),
    ]
});
//# sourceMappingURL=paymentLinkRelatedResources.js.map