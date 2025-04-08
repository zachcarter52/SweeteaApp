import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { transactionSchema } from './transaction';
export const listTransactionsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    transactions: [
        'transactions',
        optional(array(lazy(() => transactionSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listTransactionsResponse.js.map