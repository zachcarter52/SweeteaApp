"use strict";
exports.__esModule = true;
exports.searchInvoicesRequestSchema = void 0;
var schema_1 = require("../schema");
var invoiceQuery_1 = require("./invoiceQuery");
exports.searchInvoicesRequestSchema = (0, schema_1.object)({
    query: ['query', (0, schema_1.lazy)(function () { return invoiceQuery_1.invoiceQuerySchema; })],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchInvoicesRequest.js.map