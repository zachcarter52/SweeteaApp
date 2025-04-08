"use strict";
exports.__esModule = true;
exports.orderRoundingAdjustmentSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.orderRoundingAdjustmentSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=orderRoundingAdjustment.js.map