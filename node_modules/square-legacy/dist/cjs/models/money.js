"use strict";
exports.__esModule = true;
exports.moneySchema = void 0;
var schema_1 = require("../schema");
exports.moneySchema = (0, schema_1.object)({
    amount: ['amount', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    currency: ['currency', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=money.js.map