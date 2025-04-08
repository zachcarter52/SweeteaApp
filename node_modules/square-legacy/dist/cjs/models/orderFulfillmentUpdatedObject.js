"use strict";
exports.__esModule = true;
exports.orderFulfillmentUpdatedObjectSchema = void 0;
var schema_1 = require("../schema");
var orderFulfillmentUpdated_1 = require("./orderFulfillmentUpdated");
exports.orderFulfillmentUpdatedObjectSchema = (0, schema_1.object)({
    orderFulfillmentUpdated: [
        'order_fulfillment_updated',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderFulfillmentUpdated_1.orderFulfillmentUpdatedSchema; })),
    ]
});
//# sourceMappingURL=orderFulfillmentUpdatedObject.js.map