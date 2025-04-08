import { lazy, number, object, optional, string } from '../schema';
import { terminalActionQuerySchema, } from './terminalActionQuery';
export const searchTerminalActionsRequestSchema = object({
    query: ['query', optional(lazy(() => terminalActionQuerySchema))],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
});
//# sourceMappingURL=searchTerminalActionsRequest.js.map