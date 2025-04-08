import { array, lazy, object, optional } from '../schema';
import { bankAccountSchema } from './bankAccount';
import { errorSchema } from './error';
export const getBankAccountByV1IdResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    bankAccount: ['bank_account', optional(lazy(() => bankAccountSchema))],
});
//# sourceMappingURL=getBankAccountByV1IdResponse.js.map