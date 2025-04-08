import { array, lazy, nullable, object, optional, string, } from '../schema';
import { orderMoneyAmountsSchema, } from './orderMoneyAmounts';
import { orderReturnDiscountSchema, } from './orderReturnDiscount';
import { orderReturnLineItemSchema, } from './orderReturnLineItem';
import { orderReturnServiceChargeSchema, } from './orderReturnServiceCharge';
import { orderReturnTaxSchema } from './orderReturnTax';
import { orderReturnTipSchema } from './orderReturnTip';
import { orderRoundingAdjustmentSchema, } from './orderRoundingAdjustment';
export const orderReturnSchema = object({
    uid: ['uid', optional(nullable(string()))],
    sourceOrderId: ['source_order_id', optional(nullable(string()))],
    returnLineItems: [
        'return_line_items',
        optional(nullable(array(lazy(() => orderReturnLineItemSchema)))),
    ],
    returnServiceCharges: [
        'return_service_charges',
        optional(nullable(array(lazy(() => orderReturnServiceChargeSchema)))),
    ],
    returnTaxes: [
        'return_taxes',
        optional(array(lazy(() => orderReturnTaxSchema))),
    ],
    returnDiscounts: [
        'return_discounts',
        optional(array(lazy(() => orderReturnDiscountSchema))),
    ],
    returnTips: [
        'return_tips',
        optional(nullable(array(lazy(() => orderReturnTipSchema)))),
    ],
    roundingAdjustment: [
        'rounding_adjustment',
        optional(lazy(() => orderRoundingAdjustmentSchema)),
    ],
    returnAmounts: [
        'return_amounts',
        optional(lazy(() => orderMoneyAmountsSchema)),
    ],
});
//# sourceMappingURL=orderReturn.js.map