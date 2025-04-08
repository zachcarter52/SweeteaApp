"use strict";
exports.__esModule = true;
exports.orderReturnSchema = void 0;
var schema_1 = require("../schema");
var orderMoneyAmounts_1 = require("./orderMoneyAmounts");
var orderReturnDiscount_1 = require("./orderReturnDiscount");
var orderReturnLineItem_1 = require("./orderReturnLineItem");
var orderReturnServiceCharge_1 = require("./orderReturnServiceCharge");
var orderReturnTax_1 = require("./orderReturnTax");
var orderReturnTip_1 = require("./orderReturnTip");
var orderRoundingAdjustment_1 = require("./orderRoundingAdjustment");
exports.orderReturnSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sourceOrderId: ['source_order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    returnLineItems: [
        'return_line_items',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReturnLineItem_1.orderReturnLineItemSchema; })))),
    ],
    returnServiceCharges: [
        'return_service_charges',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReturnServiceCharge_1.orderReturnServiceChargeSchema; })))),
    ],
    returnTaxes: [
        'return_taxes',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReturnTax_1.orderReturnTaxSchema; }))),
    ],
    returnDiscounts: [
        'return_discounts',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReturnDiscount_1.orderReturnDiscountSchema; }))),
    ],
    returnTips: [
        'return_tips',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReturnTip_1.orderReturnTipSchema; })))),
    ],
    roundingAdjustment: [
        'rounding_adjustment',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderRoundingAdjustment_1.orderRoundingAdjustmentSchema; })),
    ],
    returnAmounts: [
        'return_amounts',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderMoneyAmounts_1.orderMoneyAmountsSchema; })),
    ]
});
//# sourceMappingURL=orderReturn.js.map