import { Schema } from '../schema';
import { OrderLineItemPricingBlocklistsBlockedDiscount } from './orderLineItemPricingBlocklistsBlockedDiscount';
import { OrderLineItemPricingBlocklistsBlockedTax } from './orderLineItemPricingBlocklistsBlockedTax';
/**
 * Describes pricing adjustments that are blocked from automatic
 * application to a line item. For more information, see
 * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
 */
export interface OrderLineItemPricingBlocklists {
    /**
     * A list of discounts blocked from applying to the line item.
     * Discounts can be blocked by the `discount_uid` (for ad hoc discounts) or
     * the `discount_catalog_object_id` (for catalog discounts).
     */
    blockedDiscounts?: OrderLineItemPricingBlocklistsBlockedDiscount[] | null;
    /**
     * A list of taxes blocked from applying to the line item.
     * Taxes can be blocked by the `tax_uid` (for ad hoc taxes) or
     * the `tax_catalog_object_id` (for catalog taxes).
     */
    blockedTaxes?: OrderLineItemPricingBlocklistsBlockedTax[] | null;
}
export declare const orderLineItemPricingBlocklistsSchema: Schema<OrderLineItemPricingBlocklists>;
