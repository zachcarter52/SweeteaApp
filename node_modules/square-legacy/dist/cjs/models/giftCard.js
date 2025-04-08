"use strict";
exports.__esModule = true;
exports.giftCardSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.giftCardSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    type: ['type', (0, schema_1.string)()],
    ganSource: ['gan_source', (0, schema_1.optional)((0, schema_1.string)())],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    balanceMoney: ['balance_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    gan: ['gan', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    customerIds: ['customer_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))]
});
//# sourceMappingURL=giftCard.js.map