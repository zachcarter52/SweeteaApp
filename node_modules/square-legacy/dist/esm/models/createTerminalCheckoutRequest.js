import { lazy, object, string } from '../schema';
import { terminalCheckoutSchema } from './terminalCheckout';
export const createTerminalCheckoutRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    checkout: ['checkout', lazy(() => terminalCheckoutSchema)],
});
//# sourceMappingURL=createTerminalCheckoutRequest.js.map