import { object, optional, string } from '../schema';
export const v1OrderHistoryEntrySchema = object({
    action: ['action', optional(string())],
    createdAt: ['created_at', optional(string())],
});
//# sourceMappingURL=v1OrderHistoryEntry.js.map