import { lazy, object } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityImportReversalSchema = object({ amountMoney: ['amount_money', lazy(() => moneySchema)] });
//# sourceMappingURL=giftCardActivityImportReversal.js.map