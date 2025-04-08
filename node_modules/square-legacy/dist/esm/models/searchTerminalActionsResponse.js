import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { terminalActionSchema } from './terminalAction';
export const searchTerminalActionsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    action: ['action', optional(array(lazy(() => terminalActionSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchTerminalActionsResponse.js.map