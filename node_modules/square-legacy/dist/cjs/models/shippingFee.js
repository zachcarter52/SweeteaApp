"use strict";
exports.__esModule = true;
exports.shippingFeeSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.shippingFeeSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    charge: ['charge', (0, schema_1.lazy)(function () { return money_1.moneySchema; })]
});
//# sourceMappingURL=shippingFee.js.map