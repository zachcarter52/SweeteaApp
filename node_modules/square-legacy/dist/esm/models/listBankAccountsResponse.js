import { array, lazy, object, optional, string } from '../schema';
import { bankAccountSchema } from './bankAccount';
import { errorSchema } from './error';
export const listBankAccountsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    bankAccounts: [
        'bank_accounts',
        optional(array(lazy(() => bankAccountSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listBankAccountsResponse.js.map