"use strict";
exports.__esModule = true;
exports.getBankAccountByV1IdResponseSchema = void 0;
var schema_1 = require("../schema");
var bankAccount_1 = require("./bankAccount");
var error_1 = require("./error");
exports.getBankAccountByV1IdResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    bankAccount: ['bank_account', (0, schema_1.optional)((0, schema_1.lazy)(function () { return bankAccount_1.bankAccountSchema; }))]
});
//# sourceMappingURL=getBankAccountByV1IdResponse.js.map