import { array, bigint, boolean, dict, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
import { orderLineItemAppliedTaxSchema, } from './orderLineItemAppliedTax';
export const orderServiceChargeSchema = object({
    uid: ['uid', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    percentage: ['percentage', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
    totalMoney: ['total_money', optional(lazy(() => moneySchema))],
    totalTaxMoney: ['total_tax_money', optional(lazy(() => moneySchema))],
    calculationPhase: ['calculation_phase', optional(string())],
    taxable: ['taxable', optional(nullable(boolean()))],
    appliedTaxes: [
        'applied_taxes',
        optional(nullable(array(lazy(() => orderLineItemAppliedTaxSchema)))),
    ],
    metadata: ['metadata', optional(nullable(dict(string())))],
    type: ['type', optional(string())],
    treatmentType: ['treatment_type', optional(string())],
    scope: ['scope', optional(string())],
});
//# sourceMappingURL=orderServiceCharge.js.map