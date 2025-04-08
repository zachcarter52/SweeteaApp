"use strict";
exports.__esModule = true;
exports.giftCardActivityLoadSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.giftCardActivityLoadSchema = (0, schema_1.object)({
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    lineItemUid: ['line_item_uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buyerPaymentInstrumentIds: [
        'buyer_payment_instrument_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ]
});
//# sourceMappingURL=giftCardActivityLoad.js.map