"use strict";
exports.__esModule = true;
exports.calculateOrderRequestSchema = void 0;
var schema_1 = require("../schema");
var order_1 = require("./order");
var orderReward_1 = require("./orderReward");
exports.calculateOrderRequestSchema = (0, schema_1.object)({
    order: ['order', (0, schema_1.lazy)(function () { return order_1.orderSchema; })],
    proposedRewards: [
        'proposed_rewards',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReward_1.orderRewardSchema; })))),
    ]
});
//# sourceMappingURL=calculateOrderRequest.js.map