"use strict";
exports.__esModule = true;
exports.catalogDiscountSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.catalogDiscountSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    discountType: ['discount_type', (0, schema_1.optional)((0, schema_1.string)())],
    percentage: ['percentage', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    pinRequired: ['pin_required', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    labelColor: ['label_color', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    modifyTaxBasis: ['modify_tax_basis', (0, schema_1.optional)((0, schema_1.string)())],
    maximumAmountMoney: [
        'maximum_amount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ]
});
//# sourceMappingURL=catalogDiscount.js.map