import { lazy, number, object, optional, string } from '../schema';
import { terminalRefundQuerySchema, } from './terminalRefundQuery';
export const searchTerminalRefundsRequestSchema = object({
    query: ['query', optional(lazy(() => terminalRefundQuerySchema))],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
});
//# sourceMappingURL=searchTerminalRefundsRequest.js.map