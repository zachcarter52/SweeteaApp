"use strict";
exports.__esModule = true;
exports.createInvoiceAttachmentResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var invoiceAttachment_1 = require("./invoiceAttachment");
exports.createInvoiceAttachmentResponseSchema = (0, schema_1.object)({
    attachment: ['attachment', (0, schema_1.optional)((0, schema_1.lazy)(function () { return invoiceAttachment_1.invoiceAttachmentSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=createInvoiceAttachmentResponse.js.map