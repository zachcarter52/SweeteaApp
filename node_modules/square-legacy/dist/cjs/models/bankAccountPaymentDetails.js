"use strict";
exports.__esModule = true;
exports.bankAccountPaymentDetailsSchema = void 0;
var schema_1 = require("../schema");
var aCHDetails_1 = require("./aCHDetails");
var error_1 = require("./error");
exports.bankAccountPaymentDetailsSchema = (0, schema_1.object)({
    bankName: ['bank_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    transferType: ['transfer_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    accountOwnershipType: [
        'account_ownership_type',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    fingerprint: ['fingerprint', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    country: ['country', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    statementDescription: [
        'statement_description',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    achDetails: ['ach_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return aCHDetails_1.aCHDetailsSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; }))))]
});
//# sourceMappingURL=bankAccountPaymentDetails.js.map