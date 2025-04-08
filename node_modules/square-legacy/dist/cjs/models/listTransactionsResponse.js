"use strict";
exports.__esModule = true;
exports.listTransactionsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var transaction_1 = require("./transaction");
exports.listTransactionsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    transactions: [
        'transactions',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return transaction_1.transactionSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listTransactionsResponse.js.map