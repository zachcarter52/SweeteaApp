import { boolean, nullable, object, optional } from '../schema';
export const orderPricingOptionsSchema = object({
    autoApplyDiscounts: ['auto_apply_discounts', optional(nullable(boolean()))],
    autoApplyTaxes: ['auto_apply_taxes', optional(nullable(boolean()))],
});
//# sourceMappingURL=orderPricingOptions.js.map