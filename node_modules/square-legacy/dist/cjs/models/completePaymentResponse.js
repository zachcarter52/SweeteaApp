"use strict";
exports.__esModule = true;
exports.completePaymentResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var payment_1 = require("./payment");
exports.completePaymentResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    payment: ['payment', (0, schema_1.optional)((0, schema_1.lazy)(function () { return payment_1.paymentSchema; }))]
});
//# sourceMappingURL=completePaymentResponse.js.map