import { lazy, object, optional, string } from '../schema';
import { terminalRefundSchema } from './terminalRefund';
export const createTerminalRefundRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    refund: ['refund', optional(lazy(() => terminalRefundSchema))],
});
//# sourceMappingURL=createTerminalRefundRequest.js.map