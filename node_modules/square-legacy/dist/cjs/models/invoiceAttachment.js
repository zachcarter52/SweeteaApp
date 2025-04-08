"use strict";
exports.__esModule = true;
exports.invoiceAttachmentSchema = void 0;
var schema_1 = require("../schema");
exports.invoiceAttachmentSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    filename: ['filename', (0, schema_1.optional)((0, schema_1.string)())],
    description: ['description', (0, schema_1.optional)((0, schema_1.string)())],
    filesize: ['filesize', (0, schema_1.optional)((0, schema_1.number)())],
    hash: ['hash', (0, schema_1.optional)((0, schema_1.string)())],
    mimeType: ['mime_type', (0, schema_1.optional)((0, schema_1.string)())],
    uploadedAt: ['uploaded_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=invoiceAttachment.js.map