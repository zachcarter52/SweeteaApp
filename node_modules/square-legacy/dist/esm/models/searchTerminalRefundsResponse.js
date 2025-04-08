import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { terminalRefundSchema } from './terminalRefund';
export const searchTerminalRefundsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refunds: ['refunds', optional(array(lazy(() => terminalRefundSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchTerminalRefundsResponse.js.map