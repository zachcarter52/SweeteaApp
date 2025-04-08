import { array, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const loyaltyProgramAccrualRuleSpendDataSchema = object({
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    excludedCategoryIds: [
        'excluded_category_ids',
        optional(nullable(array(string()))),
    ],
    excludedItemVariationIds: [
        'excluded_item_variation_ids',
        optional(nullable(array(string()))),
    ],
    taxMode: ['tax_mode', string()],
});
//# sourceMappingURL=loyaltyProgramAccrualRuleSpendData.js.map