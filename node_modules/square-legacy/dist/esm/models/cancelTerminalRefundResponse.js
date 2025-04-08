import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { terminalRefundSchema } from './terminalRefund';
export const cancelTerminalRefundResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => terminalRefundSchema))],
});
//# sourceMappingURL=cancelTerminalRefundResponse.js.map