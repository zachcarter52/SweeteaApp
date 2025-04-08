"use strict";
exports.__esModule = true;
exports.createPaymentLinkRequestSchema = void 0;
var schema_1 = require("../schema");
var checkoutOptions_1 = require("./checkoutOptions");
var order_1 = require("./order");
var prePopulatedData_1 = require("./prePopulatedData");
var quickPay_1 = require("./quickPay");
exports.createPaymentLinkRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    description: ['description', (0, schema_1.optional)((0, schema_1.string)())],
    quickPay: ['quick_pay', (0, schema_1.optional)((0, schema_1.lazy)(function () { return quickPay_1.quickPaySchema; }))],
    order: ['order', (0, schema_1.optional)((0, schema_1.lazy)(function () { return order_1.orderSchema; }))],
    checkoutOptions: [
        'checkout_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutOptions_1.checkoutOptionsSchema; })),
    ],
    prePopulatedData: [
        'pre_populated_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return prePopulatedData_1.prePopulatedDataSchema; })),
    ],
    paymentNote: ['payment_note', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=createPaymentLinkRequest.js.map