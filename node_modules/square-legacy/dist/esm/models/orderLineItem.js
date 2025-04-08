import { array, bigint, dict, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
import { orderLineItemAppliedDiscountSchema, } from './orderLineItemAppliedDiscount';
import { orderLineItemAppliedServiceChargeSchema, } from './orderLineItemAppliedServiceCharge';
import { orderLineItemAppliedTaxSchema, } from './orderLineItemAppliedTax';
import { orderLineItemModifierSchema, } from './orderLineItemModifier';
import { orderLineItemPricingBlocklistsSchema, } from './orderLineItemPricingBlocklists';
import { orderQuantityUnitSchema, } from './orderQuantityUnit';
export const orderLineItemSchema = object({
    uid: ['uid', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    quantity: ['quantity', string()],
    quantityUnit: [
        'quantity_unit',
        optional(lazy(() => orderQuantityUnitSchema)),
    ],
    note: ['note', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    variationName: ['variation_name', optional(nullable(string()))],
    itemType: ['item_type', optional(string())],
    metadata: ['metadata', optional(nullable(dict(string())))],
    modifiers: [
        'modifiers',
        optional(nullable(array(lazy(() => orderLineItemModifierSchema)))),
    ],
    appliedTaxes: [
        'applied_taxes',
        optional(nullable(array(lazy(() => orderLineItemAppliedTaxSchema)))),
    ],
    appliedDiscounts: [
        'applied_discounts',
        optional(nullable(array(lazy(() => orderLineItemAppliedDiscountSchema)))),
    ],
    appliedServiceCharges: [
        'applied_service_charges',
        optional(nullable(array(lazy(() => orderLineItemAppliedServiceChargeSchema)))),
    ],
    basePriceMoney: ['base_price_money', optional(lazy(() => moneySchema))],
    variationTotalPriceMoney: [
        'variation_total_price_money',
        optional(lazy(() => moneySchema)),
    ],
    grossSalesMoney: ['gross_sales_money', optional(lazy(() => moneySchema))],
    totalTaxMoney: ['total_tax_money', optional(lazy(() => moneySchema))],
    totalDiscountMoney: [
        'total_discount_money',
        optional(lazy(() => moneySchema)),
    ],
    totalMoney: ['total_money', optional(lazy(() => moneySchema))],
    pricingBlocklists: [
        'pricing_blocklists',
        optional(lazy(() => orderLineItemPricingBlocklistsSchema)),
    ],
    totalServiceChargeMoney: [
        'total_service_charge_money',
        optional(lazy(() => moneySchema)),
    ],
});
//# sourceMappingURL=orderLineItem.js.map