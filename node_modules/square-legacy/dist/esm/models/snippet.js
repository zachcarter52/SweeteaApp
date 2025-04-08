import { object, optional, string } from '../schema';
export const snippetSchema = object({
    id: ['id', optional(string())],
    siteId: ['site_id', optional(string())],
    content: ['content', string()],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=snippet.js.map