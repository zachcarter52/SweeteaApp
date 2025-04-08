"use strict";
exports.__esModule = true;
exports.transactionSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var refund_1 = require("./refund");
var tender_1 = require("./tender");
exports.transactionSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    tenders: ['tenders', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return tender_1.tenderSchema; }))))],
    refunds: ['refunds', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return refund_1.refundSchema; }))))],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    product: ['product', (0, schema_1.optional)((0, schema_1.string)())],
    clientId: ['client_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    shippingAddress: ['shipping_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=transaction.js.map