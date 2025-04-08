import { array, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityActivateSchema = object({
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    orderId: ['order_id', optional(nullable(string()))],
    lineItemUid: ['line_item_uid', optional(nullable(string()))],
    referenceId: ['reference_id', optional(nullable(string()))],
    buyerPaymentInstrumentIds: [
        'buyer_payment_instrument_ids',
        optional(nullable(array(string()))),
    ],
});
//# sourceMappingURL=giftCardActivityActivate.js.map