import { object, optional, string } from '../schema';
export const customerGroupSchema = object({
    id: ['id', optional(string())],
    name: ['name', string()],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=customerGroup.js.map