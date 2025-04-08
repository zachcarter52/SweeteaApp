import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const terminalRefundSchema = object({
    id: ['id', optional(string())],
    refundId: ['refund_id', optional(string())],
    paymentId: ['payment_id', string()],
    orderId: ['order_id', optional(string())],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    reason: ['reason', string()],
    deviceId: ['device_id', string()],
    deadlineDuration: ['deadline_duration', optional(nullable(string()))],
    status: ['status', optional(string())],
    cancelReason: ['cancel_reason', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    appId: ['app_id', optional(string())],
    locationId: ['location_id', optional(string())],
});
//# sourceMappingURL=terminalRefund.js.map