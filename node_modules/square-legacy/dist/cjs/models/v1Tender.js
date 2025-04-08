"use strict";
exports.__esModule = true;
exports.v1TenderSchema = void 0;
var schema_1 = require("../schema");
var v1Money_1 = require("./v1Money");
exports.v1TenderSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    employeeId: ['employee_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    receiptUrl: ['receipt_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cardBrand: ['card_brand', (0, schema_1.optional)((0, schema_1.string)())],
    panSuffix: ['pan_suffix', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    entryMethod: ['entry_method', (0, schema_1.optional)((0, schema_1.string)())],
    paymentNote: ['payment_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    totalMoney: ['total_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; }))],
    tenderedMoney: ['tendered_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; }))],
    tenderedAt: ['tendered_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    settledAt: ['settled_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    changeBackMoney: ['change_back_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; }))],
    refundedMoney: ['refunded_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return v1Money_1.v1MoneySchema; }))],
    isExchange: ['is_exchange', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=v1Tender.js.map