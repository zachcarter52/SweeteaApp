"use strict";
exports.__esModule = true;
exports.bankAccountSchema = void 0;
var schema_1 = require("../schema");
exports.bankAccountSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    accountNumberSuffix: ['account_number_suffix', (0, schema_1.string)()],
    country: ['country', (0, schema_1.string)()],
    currency: ['currency', (0, schema_1.string)()],
    accountType: ['account_type', (0, schema_1.string)()],
    holderName: ['holder_name', (0, schema_1.string)()],
    primaryBankIdentificationNumber: [
        'primary_bank_identification_number',
        (0, schema_1.string)(),
    ],
    secondaryBankIdentificationNumber: [
        'secondary_bank_identification_number',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    debitMandateReferenceId: [
        'debit_mandate_reference_id',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.string)()],
    creditable: ['creditable', (0, schema_1.boolean)()],
    debitable: ['debitable', (0, schema_1.boolean)()],
    fingerprint: ['fingerprint', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    bankName: ['bank_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=bankAccount.js.map