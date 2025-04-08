"use strict";
exports.__esModule = true;
exports.terminalRefundSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.terminalRefundSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    refundId: ['refund_id', (0, schema_1.optional)((0, schema_1.string)())],
    paymentId: ['payment_id', (0, schema_1.string)()],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.string)())],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    reason: ['reason', (0, schema_1.string)()],
    deviceId: ['device_id', (0, schema_1.string)()],
    deadlineDuration: ['deadline_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    cancelReason: ['cancel_reason', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    appId: ['app_id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=terminalRefund.js.map