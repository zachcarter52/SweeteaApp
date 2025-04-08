import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { terminalActionSchema } from './terminalAction';
export const createTerminalActionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    action: ['action', optional(lazy(() => terminalActionSchema))],
});
//# sourceMappingURL=createTerminalActionResponse.js.map