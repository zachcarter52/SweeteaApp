import { lazy, object, string } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityTransferBalanceFromSchema = object({
    transferToGiftCardId: ['transfer_to_gift_card_id', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
});
//# sourceMappingURL=giftCardActivityTransferBalanceFrom.js.map