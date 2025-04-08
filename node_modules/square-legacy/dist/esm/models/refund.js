import { array, lazy, nullable, object, optional, string, } from '../schema';
import { additionalRecipientSchema, } from './additionalRecipient';
import { moneySchema } from './money';
export const refundSchema = object({
    id: ['id', string()],
    locationId: ['location_id', string()],
    transactionId: ['transaction_id', optional(nullable(string()))],
    tenderId: ['tender_id', optional(string())],
    createdAt: ['created_at', optional(string())],
    reason: ['reason', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    status: ['status', string()],
    processingFeeMoney: [
        'processing_fee_money',
        optional(lazy(() => moneySchema)),
    ],
    additionalRecipients: [
        'additional_recipients',
        optional(nullable(array(lazy(() => additionalRecipientSchema)))),
    ],
});
//# sourceMappingURL=refund.js.map