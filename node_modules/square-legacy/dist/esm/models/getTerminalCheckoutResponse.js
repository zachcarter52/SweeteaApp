import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { terminalCheckoutSchema } from './terminalCheckout';
export const getTerminalCheckoutResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    checkout: ['checkout', optional(lazy(() => terminalCheckoutSchema))],
});
//# sourceMappingURL=getTerminalCheckoutResponse.js.map