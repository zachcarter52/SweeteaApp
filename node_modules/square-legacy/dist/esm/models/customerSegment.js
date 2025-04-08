import { object, optional, string } from '../schema';
export const customerSegmentSchema = object({
    id: ['id', optional(string())],
    name: ['name', string()],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=customerSegment.js.map