import { lazy, object } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityImportSchema = object({ amountMoney: ['amount_money', lazy(() => moneySchema)] });
//# sourceMappingURL=giftCardActivityImport.js.map