"use strict";
exports.__esModule = true;
exports.v1OrderSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var error_1 = require("./error");
var v1Money_1 = require("./v1Money");
var v1OrderHistoryEntry_1 = require("./v1OrderHistoryEntry");
var v1Tender_1 = require("./v1Tender");
exports.v1OrderSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; }))))],
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    buyerEmail: ['buyer_email', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    recipientName: ['recipient_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    recipientPhoneNumber: [
        'recipient_phone_number',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    shippingAddress: ['shipping_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    subtotalMoney: ['subtotal_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; }))],
    totalShippingMoney: [
        'total_shipping_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; })),
    ],
    totalTaxMoney: ['total_tax_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; }))],
    totalPriceMoney: ['total_price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; }))],
    totalDiscountMoney: [
        'total_discount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; })),
    ],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    expiresAt: ['expires_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buyerNote: ['buyer_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    completedNote: ['completed_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    refundedNote: ['refunded_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    canceledNote: ['canceled_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    tender: ['tender', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Tender_1.v1TenderSchema; }))],
    orderHistory: [
        'order_history',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return v1OrderHistoryEntry_1.v1OrderHistoryEntrySchema; })))),
    ],
    promoCode: ['promo_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    btcReceiveAddress: ['btc_receive_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    btcPriceSatoshi: ['btc_price_satoshi', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=v1Order.js.map