import { object, optional, string } from '../schema';
export const signatureImageSchema = object({
    imageType: ['image_type', optional(string())],
    data: ['data', optional(string())],
});
//# sourceMappingURL=signatureImage.js.map