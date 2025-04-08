import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { terminalRefundSchema } from './terminalRefund';
export const createTerminalRefundResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => terminalRefundSchema))],
});
//# sourceMappingURL=createTerminalRefundResponse.js.map