import { Schema } from '../schema';
/**
 * A category that can be assigned to an item or a parent category that can be assigned
 * to another category. For example, a clothing category can be assigned to a t-shirt item or
 * be made as the parent category to the pants category.
 */
export interface CatalogObjectCategory {
    /** The ID of the object's category. */
    id?: string;
    /** The order of the object within the context of the category. */
    ordinal?: bigint | null;
}
export declare const catalogObjectCategorySchema: Schema<CatalogObjectCategory>;
