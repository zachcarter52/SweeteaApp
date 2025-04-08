import { object, optional, string } from '../schema';
export const errorSchema = object({
    category: ['category', string()],
    code: ['code', string()],
    detail: ['detail', optional(string())],
    field: ['field', optional(string())],
});
//# sourceMappingURL=error.js.map