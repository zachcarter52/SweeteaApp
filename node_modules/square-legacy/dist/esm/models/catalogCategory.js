import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { catalogEcomSeoDataSchema, } from './catalogEcomSeoData';
import { catalogObjectCategorySchema, } from './catalogObjectCategory';
import { categoryPathToRootNodeSchema, } from './categoryPathToRootNode';
export const catalogCategorySchema = object({
    name: ['name', optional(nullable(string()))],
    imageIds: ['image_ids', optional(nullable(array(string())))],
    categoryType: ['category_type', optional(string())],
    parentCategory: [
        'parent_category',
        optional(lazy(() => catalogObjectCategorySchema)),
    ],
    isTopLevel: ['is_top_level', optional(nullable(boolean()))],
    channels: ['channels', optional(nullable(array(string())))],
    availabilityPeriodIds: [
        'availability_period_ids',
        optional(nullable(array(string()))),
    ],
    onlineVisibility: ['online_visibility', optional(nullable(boolean()))],
    rootCategory: ['root_category', optional(string())],
    ecomSeoData: [
        'ecom_seo_data',
        optional(lazy(() => catalogEcomSeoDataSchema)),
    ],
    pathToRoot: [
        'path_to_root',
        optional(nullable(array(lazy(() => categoryPathToRootNodeSchema)))),
    ],
});
//# sourceMappingURL=catalogCategory.js.map