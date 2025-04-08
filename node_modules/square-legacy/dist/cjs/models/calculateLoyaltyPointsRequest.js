"use strict";
exports.__esModule = true;
exports.calculateLoyaltyPointsRequestSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.calculateLoyaltyPointsRequestSchema = (0, schema_1.object)({
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    transactionAmountMoney: [
        'transaction_amount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    loyaltyAccountId: ['loyalty_account_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=calculateLoyaltyPointsRequest.js.map