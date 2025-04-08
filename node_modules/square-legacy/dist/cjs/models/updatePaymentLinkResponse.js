"use strict";
exports.__esModule = true;
exports.updatePaymentLinkResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var paymentLink_1 = require("./paymentLink");
exports.updatePaymentLinkResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    paymentLink: ['payment_link', (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentLink_1.paymentLinkSchema; }))]
});
//# sourceMappingURL=updatePaymentLinkResponse.js.map