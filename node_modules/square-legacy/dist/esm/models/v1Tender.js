import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { v1MoneySchema } from './v1Money';
export const v1TenderSchema = object({
    id: ['id', optional(string())],
    type: ['type', optional(string())],
    name: ['name', optional(nullable(string()))],
    employeeId: ['employee_id', optional(nullable(string()))],
    receiptUrl: ['receipt_url', optional(nullable(string()))],
    cardBrand: ['card_brand', optional(string())],
    panSuffix: ['pan_suffix', optional(nullable(string()))],
    entryMethod: ['entry_method', optional(string())],
    paymentNote: ['payment_note', optional(nullable(string()))],
    totalMoney: ['total_money', optional(lazy(() => v1MoneySchema))],
    tenderedMoney: ['tendered_money', optional(lazy(() => v1MoneySchema))],
    tenderedAt: ['tendered_at', optional(nullable(string()))],
    settledAt: ['settled_at', optional(nullable(string()))],
    changeBackMoney: ['change_back_money', optional(lazy(() => v1MoneySchema))],
    refundedMoney: ['refunded_money', optional(lazy(() => v1MoneySchema))],
    isExchange: ['is_exchange', optional(nullable(boolean()))],
});
//# sourceMappingURL=v1Tender.js.map