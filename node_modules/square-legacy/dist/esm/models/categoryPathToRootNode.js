import { nullable, object, optional, string } from '../schema';
export const categoryPathToRootNodeSchema = object({
    categoryId: ['category_id', optional(nullable(string()))],
    categoryName: ['category_name', optional(nullable(string()))],
});
//# sourceMappingURL=categoryPathToRootNode.js.map