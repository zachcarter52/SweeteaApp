"use strict";
exports.__esModule = true;
exports.v1MoneySchema = void 0;
var schema_1 = require("../schema");
exports.v1MoneySchema = (0, schema_1.object)({
    amount: ['amount', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    currencyCode: ['currency_code', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=v1Money.js.map