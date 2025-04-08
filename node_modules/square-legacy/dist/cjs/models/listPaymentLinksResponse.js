"use strict";
exports.__esModule = true;
exports.listPaymentLinksResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var paymentLink_1 = require("./paymentLink");
exports.listPaymentLinksResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    paymentLinks: [
        'payment_links',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return paymentLink_1.paymentLinkSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listPaymentLinksResponse.js.map