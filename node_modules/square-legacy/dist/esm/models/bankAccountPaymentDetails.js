import { array, lazy, nullable, object, optional, string, } from '../schema';
import { aCHDetailsSchema } from './aCHDetails';
import { errorSchema } from './error';
export const bankAccountPaymentDetailsSchema = object({
    bankName: ['bank_name', optional(nullable(string()))],
    transferType: ['transfer_type', optional(nullable(string()))],
    accountOwnershipType: [
        'account_ownership_type',
        optional(nullable(string())),
    ],
    fingerprint: ['fingerprint', optional(nullable(string()))],
    country: ['country', optional(nullable(string()))],
    statementDescription: [
        'statement_description',
        optional(nullable(string())),
    ],
    achDetails: ['ach_details', optional(lazy(() => aCHDetailsSchema))],
    errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
});
//# sourceMappingURL=bankAccountPaymentDetails.js.map