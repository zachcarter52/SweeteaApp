import { nullable, object, optional, string } from '../schema';
export const customerTextFilterSchema = object({
    exact: ['exact', optional(nullable(string()))],
    fuzzy: ['fuzzy', optional(nullable(string()))],
});
//# sourceMappingURL=customerTextFilter.js.map