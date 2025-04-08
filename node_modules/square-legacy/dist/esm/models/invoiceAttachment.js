import { number, object, optional, string } from '../schema';
export const invoiceAttachmentSchema = object({
    id: ['id', optional(string())],
    filename: ['filename', optional(string())],
    description: ['description', optional(string())],
    filesize: ['filesize', optional(number())],
    hash: ['hash', optional(string())],
    mimeType: ['mime_type', optional(string())],
    uploadedAt: ['uploaded_at', optional(string())],
});
//# sourceMappingURL=invoiceAttachment.js.map