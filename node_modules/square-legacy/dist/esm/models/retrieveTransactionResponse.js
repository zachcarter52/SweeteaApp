import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { transactionSchema } from './transaction';
export const retrieveTransactionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    transaction: ['transaction', optional(lazy(() => transactionSchema))],
});
//# sourceMappingURL=retrieveTransactionResponse.js.map