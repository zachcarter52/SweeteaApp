import { Schema } from '../schema';
/** A node in the path from a retrieved category to its root node. */
export interface CategoryPathToRootNode {
    /** The category's ID. */
    categoryId?: string | null;
    /** The category's name. */
    categoryName?: string | null;
}
export declare const categoryPathToRootNodeSchema: Schema<CategoryPathToRootNode>;
