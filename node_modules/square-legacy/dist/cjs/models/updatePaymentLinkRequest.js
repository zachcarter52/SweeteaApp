"use strict";
exports.__esModule = true;
exports.updatePaymentLinkRequestSchema = void 0;
var schema_1 = require("../schema");
var paymentLink_1 = require("./paymentLink");
exports.updatePaymentLinkRequestSchema = (0, schema_1.object)({ paymentLink: ['payment_link', (0, schema_1.lazy)(function () { return paymentLink_1.paymentLinkSchema; })] });
//# sourceMappingURL=updatePaymentLinkRequest.js.map