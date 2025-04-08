import { array, bigint, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
import { orderLineItemAppliedDiscountSchema, } from './orderLineItemAppliedDiscount';
import { orderLineItemAppliedServiceChargeSchema, } from './orderLineItemAppliedServiceCharge';
import { orderLineItemAppliedTaxSchema, } from './orderLineItemAppliedTax';
import { orderQuantityUnitSchema, } from './orderQuantityUnit';
import { orderReturnLineItemModifierSchema, } from './orderReturnLineItemModifier';
export const orderReturnLineItemSchema = object({
    uid: ['uid', optional(nullable(string()))],
    sourceLineItemUid: ['source_line_item_uid', optional(nullable(string()))],
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
    returnModifiers: [
        'return_modifiers',
        optional(nullable(array(lazy(() => orderReturnLineItemModifierSchema)))),
    ],
    appliedTaxes: [
        'applied_taxes',
        optional(nullable(array(lazy(() => orderLineItemAppliedTaxSchema)))),
    ],
    appliedDiscounts: [
        'applied_discounts',
        optional(nullable(array(lazy(() => orderLineItemAppliedDiscountSchema)))),
    ],
    basePriceMoney: ['base_price_money', optional(lazy(() => moneySchema))],
    variationTotalPriceMoney: [
        'variation_total_price_money',
        optional(lazy(() => moneySchema)),
    ],
    grossReturnMoney: ['gross_return_money', optional(lazy(() => moneySchema))],
    totalTaxMoney: ['total_tax_money', optional(lazy(() => moneySchema))],
    totalDiscountMoney: [
        'total_discount_money',
        optional(lazy(() => moneySchema)),
    ],
    totalMoney: ['total_money', optional(lazy(() => moneySchema))],
    appliedServiceCharges: [
        'applied_service_charges',
        optional(nullable(array(lazy(() => orderLineItemAppliedServiceChargeSchema)))),
    ],
    totalServiceChargeMoney: [
        'total_service_charge_money',
        optional(lazy(() => moneySchema)),
    ],
});
//# sourceMappingURL=orderReturnLineItem.js.map