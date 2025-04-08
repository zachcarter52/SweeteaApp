"use strict";
exports.__esModule = true;
exports.externalPaymentDetailsSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.externalPaymentDetailsSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    source: ['source', (0, schema_1.string)()],
    sourceId: ['source_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sourceFeeMoney: ['source_fee_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=externalPaymentDetails.js.map