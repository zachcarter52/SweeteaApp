import { array, dict, lazy, nullable, number, object, optional, string, } from '../schema';
import { fulfillmentSchema } from './fulfillment';
import { moneySchema } from './money';
import { orderLineItemSchema } from './orderLineItem';
import { orderLineItemDiscountSchema, } from './orderLineItemDiscount';
import { orderLineItemTaxSchema } from './orderLineItemTax';
import { orderMoneyAmountsSchema, } from './orderMoneyAmounts';
import { orderPricingOptionsSchema, } from './orderPricingOptions';
import { orderReturnSchema } from './orderReturn';
import { orderRewardSchema } from './orderReward';
import { orderRoundingAdjustmentSchema, } from './orderRoundingAdjustment';
import { orderServiceChargeSchema, } from './orderServiceCharge';
import { orderSourceSchema } from './orderSource';
import { refundSchema } from './refund';
import { tenderSchema } from './tender';
export const orderSchema = object({
    id: ['id', optional(string())],
    locationId: ['location_id', string()],
    referenceId: ['reference_id', optional(nullable(string()))],
    source: ['source', optional(lazy(() => orderSourceSchema))],
    customerId: ['customer_id', optional(nullable(string()))],
    lineItems: [
        'line_items',
        optional(nullable(array(lazy(() => orderLineItemSchema)))),
    ],
    taxes: [
        'taxes',
        optional(nullable(array(lazy(() => orderLineItemTaxSchema)))),
    ],
    discounts: [
        'discounts',
        optional(nullable(array(lazy(() => orderLineItemDiscountSchema)))),
    ],
    serviceCharges: [
        'service_charges',
        optional(nullable(array(lazy(() => orderServiceChargeSchema)))),
    ],
    fulfillments: [
        'fulfillments',
        optional(nullable(array(lazy(() => fulfillmentSchema)))),
    ],
    returns: ['returns', optional(array(lazy(() => orderReturnSchema)))],
    returnAmounts: [
        'return_amounts',
        optional(lazy(() => orderMoneyAmountsSchema)),
    ],
    netAmounts: ['net_amounts', optional(lazy(() => orderMoneyAmountsSchema))],
    roundingAdjustment: [
        'rounding_adjustment',
        optional(lazy(() => orderRoundingAdjustmentSchema)),
    ],
    tenders: ['tenders', optional(array(lazy(() => tenderSchema)))],
    refunds: ['refunds', optional(array(lazy(() => refundSchema)))],
    metadata: ['metadata', optional(nullable(dict(string())))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    closedAt: ['closed_at', optional(string())],
    state: ['state', optional(string())],
    version: ['version', optional(number())],
    totalMoney: ['total_money', optional(lazy(() => moneySchema))],
    totalTaxMoney: ['total_tax_money', optional(lazy(() => moneySchema))],
    totalDiscountMoney: [
        'total_discount_money',
        optional(lazy(() => moneySchema)),
    ],
    totalTipMoney: ['total_tip_money', optional(lazy(() => moneySchema))],
    totalServiceChargeMoney: [
        'total_service_charge_money',
        optional(lazy(() => moneySchema)),
    ],
    ticketName: ['ticket_name', optional(nullable(string()))],
    pricingOptions: [
        'pricing_options',
        optional(lazy(() => orderPricingOptionsSchema)),
    ],
    rewards: ['rewards', optional(array(lazy(() => orderRewardSchema)))],
    netAmountDueMoney: [
        'net_amount_due_money',
        optional(lazy(() => moneySchema)),
    ],
});
//# sourceMappingURL=order.js.map