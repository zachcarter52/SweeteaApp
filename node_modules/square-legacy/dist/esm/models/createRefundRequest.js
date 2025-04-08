import { lazy, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const createRefundRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    tenderId: ['tender_id', string()],
    reason: ['reason', optional(string())],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
});
//# sourceMappingURL=createRefundRequest.js.map