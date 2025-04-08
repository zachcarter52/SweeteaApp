import { lazy, object, string } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityTransferBalanceToSchema = object({
    transferFromGiftCardId: ['transfer_from_gift_card_id', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
});
//# sourceMappingURL=giftCardActivityTransferBalanceTo.js.map