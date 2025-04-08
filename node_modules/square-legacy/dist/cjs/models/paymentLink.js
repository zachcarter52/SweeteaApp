"use strict";
exports.__esModule = true;
exports.paymentLinkSchema = void 0;
var schema_1 = require("../schema");
var checkoutOptions_1 = require("./checkoutOptions");
var prePopulatedData_1 = require("./prePopulatedData");
exports.paymentLinkSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.number)()],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.string)())],
    checkoutOptions: [
        'checkout_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutOptions_1.checkoutOptionsSchema; })),
    ],
    prePopulatedData: [
        'pre_populated_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return prePopulatedData_1.prePopulatedDataSchema; })),
    ],
    url: ['url', (0, schema_1.optional)((0, schema_1.string)())],
    longUrl: ['long_url', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    paymentNote: ['payment_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=paymentLink.js.map