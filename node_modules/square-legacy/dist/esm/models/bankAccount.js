import { boolean, nullable, number, object, optional, string, } from '../schema';
export const bankAccountSchema = object({
    id: ['id', string()],
    accountNumberSuffix: ['account_number_suffix', string()],
    country: ['country', string()],
    currency: ['currency', string()],
    accountType: ['account_type', string()],
    holderName: ['holder_name', string()],
    primaryBankIdentificationNumber: [
        'primary_bank_identification_number',
        string(),
    ],
    secondaryBankIdentificationNumber: [
        'secondary_bank_identification_number',
        optional(nullable(string())),
    ],
    debitMandateReferenceId: [
        'debit_mandate_reference_id',
        optional(nullable(string())),
    ],
    referenceId: ['reference_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    status: ['status', string()],
    creditable: ['creditable', boolean()],
    debitable: ['debitable', boolean()],
    fingerprint: ['fingerprint', optional(nullable(string()))],
    version: ['version', optional(number())],
    bankName: ['bank_name', optional(nullable(string()))],
});
//# sourceMappingURL=bankAccount.js.map