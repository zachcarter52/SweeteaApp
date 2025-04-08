import { nullable, object, optional, string } from '../schema';
export const paginationCursorSchema = object({
    orderValue: ['order_value', optional(nullable(string()))],
});
//# sourceMappingURL=paginationCursor.js.map