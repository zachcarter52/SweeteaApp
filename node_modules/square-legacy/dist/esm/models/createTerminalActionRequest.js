import { lazy, object, string } from '../schema';
import { terminalActionSchema } from './terminalAction';
export const createTerminalActionRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    action: ['action', lazy(() => terminalActionSchema)],
});
//# sourceMappingURL=createTerminalActionRequest.js.map