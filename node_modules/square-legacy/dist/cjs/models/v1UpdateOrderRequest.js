"use strict";
exports.__esModule = true;
exports.v1UpdateOrderRequestSchema = void 0;
var schema_1 = require("../schema");
exports.v1UpdateOrderRequestSchema = (0, schema_1.object)({
    action: ['action', (0, schema_1.string)()],
    shippedTrackingNumber: [
        'shipped_tracking_number',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    completedNote: ['completed_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    refundedNote: ['refunded_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    canceledNote: ['canceled_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=v1UpdateOrderRequest.js.map