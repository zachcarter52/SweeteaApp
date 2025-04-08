"use strict";
exports.__esModule = true;
exports.createInvoiceRequestSchema = void 0;
var schema_1 = require("../schema");
var invoice_1 = require("./invoice");
exports.createInvoiceRequestSchema = (0, schema_1.object)({
    invoice: ['invoice', (0, schema_1.lazy)(function () { return invoice_1.invoiceSchema; })],
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=createInvoiceRequest.js.map