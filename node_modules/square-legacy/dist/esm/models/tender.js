import { array, lazy, nullable, object, optional, string, } from '../schema';
import { additionalRecipientSchema, } from './additionalRecipient';
import { moneySchema } from './money';
import { tenderBankAccountDetailsSchema, } from './tenderBankAccountDetails';
import { tenderBuyNowPayLaterDetailsSchema, } from './tenderBuyNowPayLaterDetails';
import { tenderCardDetailsSchema, } from './tenderCardDetails';
import { tenderCashDetailsSchema, } from './tenderCashDetails';
import { tenderSquareAccountDetailsSchema, } from './tenderSquareAccountDetails';
export const tenderSchema = object({
    id: ['id', optional(string())],
    locationId: ['location_id', optional(nullable(string()))],
    transactionId: ['transaction_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    note: ['note', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
    processingFeeMoney: [
        'processing_fee_money',
        optional(lazy(() => moneySchema)),
    ],
    customerId: ['customer_id', optional(nullable(string()))],
    type: ['type', string()],
    cardDetails: ['card_details', optional(lazy(() => tenderCardDetailsSchema))],
    cashDetails: ['cash_details', optional(lazy(() => tenderCashDetailsSchema))],
    bankAccountDetails: [
        'bank_account_details',
        optional(lazy(() => tenderBankAccountDetailsSchema)),
    ],
    buyNowPayLaterDetails: [
        'buy_now_pay_later_details',
        optional(lazy(() => tenderBuyNowPayLaterDetailsSchema)),
    ],
    squareAccountDetails: [
        'square_account_details',
        optional(lazy(() => tenderSquareAccountDetailsSchema)),
    ],
    additionalRecipients: [
        'additional_recipients',
        optional(nullable(array(lazy(() => additionalRecipientSchema)))),
    ],
    paymentId: ['payment_id', optional(nullable(string()))],
});
//# sourceMappingURL=tender.js.map