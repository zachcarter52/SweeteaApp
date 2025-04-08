import { bigint, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const catalogQuickAmountSchema = object({
    type: ['type', string()],
    amount: ['amount', lazy(() => moneySchema)],
    score: ['score', optional(nullable(bigint()))],
    ordinal: ['ordinal', optional(nullable(bigint()))],
});
//# sourceMappingURL=catalogQuickAmount.js.map