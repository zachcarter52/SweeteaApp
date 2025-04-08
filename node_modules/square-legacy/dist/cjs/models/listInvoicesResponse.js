"use strict";
exports.__esModule = true;
exports.listInvoicesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var invoice_1 = require("./invoice");
exports.listInvoicesResponseSchema = (0, schema_1.object)({
    invoices: ['invoices', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return invoice_1.invoiceSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=listInvoicesResponse.js.map