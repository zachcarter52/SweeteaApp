"use strict";
exports.__esModule = true;
exports.createRefundRequestSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.createRefundRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    tenderId: ['tender_id', (0, schema_1.string)()],
    reason: ['reason', (0, schema_1.optional)((0, schema_1.string)())],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })]
});
//# sourceMappingURL=createRefundRequest.js.map