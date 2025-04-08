import { lazy, number, object, optional, string } from '../schema';
import { terminalCheckoutQuerySchema, } from './terminalCheckoutQuery';
export const searchTerminalCheckoutsRequestSchema = object({
    query: ['query', optional(lazy(() => terminalCheckoutQuerySchema))],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
});
//# sourceMappingURL=searchTerminalCheckoutsRequest.js.map