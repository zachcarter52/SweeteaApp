import { boolean, nullable, object, optional, string } from '../schema';
export const siteSchema = object({
    id: ['id', optional(string())],
    siteTitle: ['site_title', optional(nullable(string()))],
    domain: ['domain', optional(nullable(string()))],
    isPublished: ['is_published', optional(nullable(boolean()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=site.js.map