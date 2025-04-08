"use strict";
exports.__esModule = true;
exports.orderSchema = void 0;
var schema_1 = require("../schema");
var fulfillment_1 = require("./fulfillment");
var money_1 = require("./money");
var orderLineItem_1 = require("./orderLineItem");
var orderLineItemDiscount_1 = require("./orderLineItemDiscount");
var orderLineItemTax_1 = require("./orderLineItemTax");
var orderMoneyAmounts_1 = require("./orderMoneyAmounts");
var orderPricingOptions_1 = require("./orderPricingOptions");
var orderReturn_1 = require("./orderReturn");
var orderReward_1 = require("./orderReward");
var orderRoundingAdjustment_1 = require("./orderRoundingAdjustment");
var orderServiceCharge_1 = require("./orderServiceCharge");
var orderSource_1 = require("./orderSource");
var refund_1 = require("./refund");
var tender_1 = require("./tender");
exports.orderSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.string)()],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    source: ['source', (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderSource_1.orderSourceSchema; }))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    lineItems: [
        'line_items',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItem_1.orderLineItemSchema; })))),
    ],
    taxes: [
        'taxes',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItemTax_1.orderLineItemTaxSchema; })))),
    ],
    discounts: [
        'discounts',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderLineItemDiscount_1.orderLineItemDiscountSchema; })))),
    ],
    serviceCharges: [
        'service_charges',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderServiceCharge_1.orderServiceChargeSchema; })))),
    ],
    fulfillments: [
        'fulfillments',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return fulfillment_1.fulfillmentSchema; })))),
    ],
    returns: ['returns', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReturn_1.orderReturnSchema; })))],
    returnAmounts: [
        'return_amounts',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderMoneyAmounts_1.orderMoneyAmountsSchema; })),
    ],
    netAmounts: ['net_amounts', (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderMoneyAmounts_1.orderMoneyAmountsSchema; }))],
    roundingAdjustment: [
        'rounding_adjustment',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderRoundingAdjustment_1.orderRoundingAdjustmentSchema; })),
    ],
    tenders: ['tenders', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return tender_1.tenderSchema; })))],
    refunds: ['refunds', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return refund_1.refundSchema; })))],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    closedAt: ['closed_at', (0, schema_1.optional)((0, schema_1.string)())],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    totalMoney: ['total_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalTaxMoney: ['total_tax_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalDiscountMoney: [
        'total_discount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    totalTipMoney: ['total_tip_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalServiceChargeMoney: [
        'total_service_charge_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    ticketName: ['ticket_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    pricingOptions: [
        'pricing_options',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderPricingOptions_1.orderPricingOptionsSchema; })),
    ],
    rewards: ['rewards', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderReward_1.orderRewardSchema; })))],
    netAmountDueMoney: [
        'net_amount_due_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ]
});
//# sourceMappingURL=order.js.map