import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { catalogEcomSeoDataSchema, } from './catalogEcomSeoData';
import { catalogItemFoodAndBeverageDetailsSchema, } from './catalogItemFoodAndBeverageDetails';
import { catalogItemModifierListInfoSchema, } from './catalogItemModifierListInfo';
import { catalogItemOptionForItemSchema, } from './catalogItemOptionForItem';
import { catalogObjectSchema } from './catalogObject';
import { catalogObjectCategorySchema, } from './catalogObjectCategory';
export const catalogItemSchema = object({
    name: ['name', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    abbreviation: ['abbreviation', optional(nullable(string()))],
    labelColor: ['label_color', optional(nullable(string()))],
    isTaxable: ['is_taxable', optional(nullable(boolean()))],
    availableOnline: ['available_online', optional(nullable(boolean()))],
    availableForPickup: ['available_for_pickup', optional(nullable(boolean()))],
    availableElectronically: [
        'available_electronically',
        optional(nullable(boolean())),
    ],
    categoryId: ['category_id', optional(nullable(string()))],
    taxIds: ['tax_ids', optional(nullable(array(string())))],
    modifierListInfo: [
        'modifier_list_info',
        optional(nullable(array(lazy(() => catalogItemModifierListInfoSchema)))),
    ],
    variations: [
        'variations',
        optional(nullable(array(lazy(() => catalogObjectSchema)))),
    ],
    productType: ['product_type', optional(string())],
    skipModifierScreen: ['skip_modifier_screen', optional(nullable(boolean()))],
    itemOptions: [
        'item_options',
        optional(nullable(array(lazy(() => catalogItemOptionForItemSchema)))),
    ],
    imageIds: ['image_ids', optional(nullable(array(string())))],
    sortName: ['sort_name', optional(nullable(string()))],
    categories: [
        'categories',
        optional(nullable(array(lazy(() => catalogObjectCategorySchema)))),
    ],
    descriptionHtml: ['description_html', optional(nullable(string()))],
    descriptionPlaintext: ['description_plaintext', optional(string())],
    channels: ['channels', optional(nullable(array(string())))],
    isArchived: ['is_archived', optional(nullable(boolean()))],
    ecomSeoData: [
        'ecom_seo_data',
        optional(lazy(() => catalogEcomSeoDataSchema)),
    ],
    foodAndBeverageDetails: [
        'food_and_beverage_details',
        optional(lazy(() => catalogItemFoodAndBeverageDetailsSchema)),
    ],
    reportingCategory: [
        'reporting_category',
        optional(lazy(() => catalogObjectCategorySchema)),
    ],
});
//# sourceMappingURL=catalogItem.js.map