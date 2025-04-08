"use strict";
exports.__esModule = true;
exports.additionalRecipientSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.additionalRecipientSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.string)()],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    receivableId: ['receivable_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=additionalRecipient.js.map