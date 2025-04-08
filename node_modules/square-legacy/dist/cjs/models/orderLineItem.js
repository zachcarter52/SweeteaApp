"use strict";
exports.__esModule = true;
exports.orderLineItemSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
var orderLineItemAppliedDiscount_1 = require("./orderLineItemAppliedDiscount");
var orderLineItemAppliedServiceCharge_1 = require("./orderLineItemAppliedServiceCharge");
var orderLineItemAppliedTax_1 = require("./orderLineItemAppliedTax");
var orderLineItemModifier_1 = require("./orderLineItemModifier");
var orderLineItemPricingBlocklists_1 = require("./orderLineItemPricingBlocklists");
var orderQuantityUnit_1 = require("./orderQuantityUnit");
exports.orderLineItemSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    quantity: ['quantity', (0, schema_1.string)()],
    quantityUnit: [
        'quantity_unit',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderQuantityUnit_1.orderQuantityUnitSchema; })),
    ],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    variationName: ['variation_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    itemType: ['item_type', (0, schema_1.optional)((0, schema_1.string)())],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))],
    modifiers: [
        'modifiers',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItemModifier_1.orderLineItemModifierSchema; })))),
    ],
    appliedTaxes: [
        'applied_taxes',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItemAppliedTax_1.orderLineItemAppliedTaxSchema; })))),
    ],
    appliedDiscounts: [
        'applied_discounts',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItemAppliedDiscount_1.orderLineItemAppliedDiscountSchema; })))),
    ],
    appliedServiceCharges: [
        'applied_service_charges',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItemAppliedServiceCharge_1.orderLineItemAppliedServiceChargeSchema; })))),
    ],
    basePriceMoney: ['base_price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    variationTotalPriceMoney: [
        'variation_total_price_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    grossSalesMoney: ['gross_sales_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalTaxMoney: ['total_tax_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalDiscountMoney: [
        'total_discount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    totalMoney: ['total_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    pricingBlocklists: [
        'pricing_blocklists',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderLineItemPricingBlocklists_1.orderLineItemPricingBlocklistsSchema; })),
    ],
    totalServiceChargeMoney: [
        'total_service_charge_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ]
});
//# sourceMappingURL=orderLineItem.js.map