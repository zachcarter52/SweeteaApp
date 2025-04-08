"use strict";
exports.__esModule = true;
exports.catalogQuickAmountSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.catalogQuickAmountSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    amount: ['amount', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    score: ['score', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))]
});
//# sourceMappingURL=catalogQuickAmount.js.map