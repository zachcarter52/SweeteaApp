"use strict";
exports.__esModule = true;
exports.updatePaymentRequestSchema = void 0;
var schema_1 = require("../schema");
var payment_1 = require("./payment");
exports.updatePaymentRequestSchema = (0, schema_1.object)({
    payment: ['payment', (0, schema_1.optional)((0, schema_1.lazy)(function () { return payment_1.paymentSchema; }))],
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()]
});
//# sourceMappingURL=updatePaymentRequest.js.map