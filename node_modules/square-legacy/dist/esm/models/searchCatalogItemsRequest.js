import { array, lazy, number, object, optional, string, } from '../schema';
import { customAttributeFilterSchema, } from './customAttributeFilter';
export const searchCatalogItemsRequestSchema = object({
    textFilter: ['text_filter', optional(string())],
    categoryIds: ['category_ids', optional(array(string()))],
    stockLevels: ['stock_levels', optional(array(string()))],
    enabledLocationIds: ['enabled_location_ids', optional(array(string()))],
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
    sortOrder: ['sort_order', optional(string())],
    productTypes: ['product_types', optional(array(string()))],
    customAttributeFilters: [
        'custom_attribute_filters',
        optional(array(lazy(() => customAttributeFilterSchema))),
    ],
    archivedState: ['archived_state', optional(string())],
});
//# sourceMappingURL=searchCatalogItemsRequest.js.map