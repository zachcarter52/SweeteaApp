import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const externalPaymentDetailsSchema = object({
    type: ['type', string()],
    source: ['source', string()],
    sourceId: ['source_id', optional(nullable(string()))],
    sourceFeeMoney: ['source_fee_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=externalPaymentDetails.js.map