import { array, lazy, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const loyaltyProgramRewardDefinitionSchema = object({
    scope: ['scope', string()],
    discountType: ['discount_type', string()],
    percentageDiscount: ['percentage_discount', optional(string())],
    catalogObjectIds: ['catalog_object_ids', optional(array(string()))],
    fixedDiscountMoney: [
        'fixed_discount_money',
        optional(lazy(() => moneySchema)),
    ],
    maxDiscountMoney: ['max_discount_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=loyaltyProgramRewardDefinition.js.map