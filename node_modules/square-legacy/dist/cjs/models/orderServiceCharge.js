"use strict";
exports.__esModule = true;
exports.orderServiceChargeSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
var orderLineItemAppliedTax_1 = require("./orderLineItemAppliedTax");
exports.orderServiceChargeSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    percentage: ['percentage', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    appliedMoney: ['applied_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalMoney: ['total_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalTaxMoney: ['total_tax_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    calculationPhase: ['calculation_phase', (0, schema_1.optional)((0, schema_1.string)())],
    taxable: ['taxable', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    appliedTaxes: [
        'applied_taxes',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItemAppliedTax_1.orderLineItemAppliedTaxSchema; })))),
    ],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    treatmentType: ['treatment_type', (0, schema_1.optional)((0, schema_1.string)())],
    scope: ['scope', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=orderServiceCharge.js.map