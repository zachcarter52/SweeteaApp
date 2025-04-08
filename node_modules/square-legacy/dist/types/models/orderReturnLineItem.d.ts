import { Schema } from '../schema';
import { Money } from './money';
import { OrderLineItemAppliedDiscount } from './orderLineItemAppliedDiscount';
import { OrderLineItemAppliedServiceCharge } from './orderLineItemAppliedServiceCharge';
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax';
import { OrderQuantityUnit } from './orderQuantityUnit';
import { OrderReturnLineItemModifier } from './orderReturnLineItemModifier';
/** The line item being returned in an order. */
export interface OrderReturnLineItem {
    /** A unique ID for this return line-item entry. */
    uid?: string | null;
    /** The `uid` of the line item in the original sale order. */
    sourceLineItemUid?: string | null;
    /** The name of the line item. */
    name?: string | null;
    /**
     * The quantity returned, formatted as a decimal number.
     * For example, `"3"`.
     * Line items with a `quantity_unit` can have non-integer quantities.
     * For example, `"1.70000"`.
     */
    quantity: string;
    /**
     * Contains the measurement unit for a quantity and a precision that
     * specifies the number of digits after the decimal point for decimal quantities.
     */
    quantityUnit?: OrderQuantityUnit;
    /** The note of the return line item. */
    note?: string | null;
    /** The [CatalogItemVariation](entity:CatalogItemVariation) ID applied to this return line item. */
    catalogObjectId?: string | null;
    /** The version of the catalog object that this line item references. */
    catalogVersion?: bigint | null;
    /** The name of the variation applied to this return line item. */
    variationName?: string | null;
    /** Represents the line item type. */
    itemType?: string;
    /** The [CatalogModifier](entity:CatalogModifier)s applied to this line item. */
    returnModifiers?: OrderReturnLineItemModifier[] | null;
    /**
     * The list of references to `OrderReturnTax` entities applied to the return line item. Each
     * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
     * `OrderReturnTax` applied to the return line item. On reads, the applied amount
     * is populated.
     */
    appliedTaxes?: OrderLineItemAppliedTax[] | null;
    /**
     * The list of references to `OrderReturnDiscount` entities applied to the return line item. Each
     * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
     * `OrderReturnDiscount` applied to the return line item. On reads, the applied amount
     * is populated.
     */
    appliedDiscounts?: OrderLineItemAppliedDiscount[] | null;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    basePriceMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    variationTotalPriceMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    grossReturnMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalTaxMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalDiscountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalMoney?: Money;
    /**
     * The list of references to `OrderReturnServiceCharge` entities applied to the return
     * line item. Each `OrderLineItemAppliedServiceCharge` has a `service_charge_uid` that
     * references the `uid` of a top-level `OrderReturnServiceCharge` applied to the return line
     * item. On reads, the applied amount is populated.
     */
    appliedServiceCharges?: OrderLineItemAppliedServiceCharge[] | null;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    totalServiceChargeMoney?: Money;
}
export declare const orderReturnLineItemSchema: Schema<OrderReturnLineItem>;
