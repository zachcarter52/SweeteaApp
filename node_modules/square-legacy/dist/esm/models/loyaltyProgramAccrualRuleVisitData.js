import { lazy, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const loyaltyProgramAccrualRuleVisitDataSchema = object({
    minimumAmountMoney: [
        'minimum_amount_money',
        optional(lazy(() => moneySchema)),
    ],
    taxMode: ['tax_mode', string()],
});
//# sourceMappingURL=loyaltyProgramAccrualRuleVisitData.js.map