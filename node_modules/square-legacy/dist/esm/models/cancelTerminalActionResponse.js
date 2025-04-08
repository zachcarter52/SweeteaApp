import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { terminalActionSchema } from './terminalAction';
export const cancelTerminalActionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    action: ['action', optional(lazy(() => terminalActionSchema))],
});
//# sourceMappingURL=cancelTerminalActionResponse.js.map