"use strict";
exports.__esModule = true;
exports.createInvoiceAttachmentRequestSchema = void 0;
var schema_1 = require("../schema");
exports.createInvoiceAttachmentRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    description: ['description', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=createInvoiceAttachmentRequest.js.map