import { nullable, object, optional, string } from '../schema';
export const catalogImageSchema = object({
    name: ['name', optional(nullable(string()))],
    url: ['url', optional(nullable(string()))],
    caption: ['caption', optional(nullable(string()))],
    photoStudioOrderId: ['photo_studio_order_id', optional(nullable(string()))],
});
//# sourceMappingURL=catalogImage.js.map