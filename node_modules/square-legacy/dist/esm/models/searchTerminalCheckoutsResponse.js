import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { terminalCheckoutSchema } from './terminalCheckout';
export const searchTerminalCheckoutsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    checkouts: [
        'checkouts',
        optional(array(lazy(() => terminalCheckoutSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchTerminalCheckoutsResponse.js.map