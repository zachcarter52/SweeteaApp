import { nullable, number, object, optional } from '../schema';
export const quantityRatioSchema = object({
    quantity: ['quantity', optional(nullable(number()))],
    quantityDenominator: ['quantity_denominator', optional(nullable(number()))],
});
//# sourceMappingURL=quantityRatio.js.map