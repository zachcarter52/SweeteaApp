import { boolean, nullable, object, optional, string } from '../schema';
export const catalogTaxSchema = object({
    name: ['name', optional(nullable(string()))],
    calculationPhase: ['calculation_phase', optional(string())],
    inclusionType: ['inclusion_type', optional(string())],
    percentage: ['percentage', optional(nullable(string()))],
    appliesToCustomAmounts: [
        'applies_to_custom_amounts',
        optional(nullable(boolean())),
    ],
    enabled: ['enabled', optional(nullable(boolean()))],
    appliesToProductSetId: [
        'applies_to_product_set_id',
        optional(nullable(string())),
    ],
});
//# sourceMappingURL=catalogTax.js.map