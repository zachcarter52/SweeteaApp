import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const catalogDiscountSchema = object({
    name: ['name', optional(nullable(string()))],
    discountType: ['discount_type', optional(string())],
    percentage: ['percentage', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    pinRequired: ['pin_required', optional(nullable(boolean()))],
    labelColor: ['label_color', optional(nullable(string()))],
    modifyTaxBasis: ['modify_tax_basis', optional(string())],
    maximumAmountMoney: [
        'maximum_amount_money',
        optional(lazy(() => moneySchema)),
    ],
});
//# sourceMappingURL=catalogDiscount.js.map