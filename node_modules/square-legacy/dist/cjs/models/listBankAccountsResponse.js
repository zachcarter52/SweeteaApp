"use strict";
exports.__esModule = true;
exports.listBankAccountsResponseSchema = void 0;
var schema_1 = require("../schema");
var bankAccount_1 = require("./bankAccount");
var error_1 = require("./error");
exports.listBankAccountsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    bankAccounts: [
        'bank_accounts',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return bankAccount_1.bankAccountSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listBankAccountsResponse.js.map