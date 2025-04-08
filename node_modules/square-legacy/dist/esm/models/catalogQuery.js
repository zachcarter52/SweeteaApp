import { lazy, object, optional } from '../schema';
import { catalogQueryExactSchema, } from './catalogQueryExact';
import { catalogQueryItemsForItemOptionsSchema, } from './catalogQueryItemsForItemOptions';
import { catalogQueryItemsForModifierListSchema, } from './catalogQueryItemsForModifierList';
import { catalogQueryItemsForTaxSchema, } from './catalogQueryItemsForTax';
import { catalogQueryItemVariationsForItemOptionValuesSchema, } from './catalogQueryItemVariationsForItemOptionValues';
import { catalogQueryPrefixSchema, } from './catalogQueryPrefix';
import { catalogQueryRangeSchema, } from './catalogQueryRange';
import { catalogQuerySetSchema } from './catalogQuerySet';
import { catalogQuerySortedAttributeSchema, } from './catalogQuerySortedAttribute';
import { catalogQueryTextSchema } from './catalogQueryText';
export const catalogQuerySchema = object({
    sortedAttributeQuery: [
        'sorted_attribute_query',
        optional(lazy(() => catalogQuerySortedAttributeSchema)),
    ],
    exactQuery: ['exact_query', optional(lazy(() => catalogQueryExactSchema))],
    setQuery: ['set_query', optional(lazy(() => catalogQuerySetSchema))],
    prefixQuery: ['prefix_query', optional(lazy(() => catalogQueryPrefixSchema))],
    rangeQuery: ['range_query', optional(lazy(() => catalogQueryRangeSchema))],
    textQuery: ['text_query', optional(lazy(() => catalogQueryTextSchema))],
    itemsForTaxQuery: [
        'items_for_tax_query',
        optional(lazy(() => catalogQueryItemsForTaxSchema)),
    ],
    itemsForModifierListQuery: [
        'items_for_modifier_list_query',
        optional(lazy(() => catalogQueryItemsForModifierListSchema)),
    ],
    itemsForItemOptionsQuery: [
        'items_for_item_options_query',
        optional(lazy(() => catalogQueryItemsForItemOptionsSchema)),
    ],
    itemVariationsForItemOptionValuesQuery: [
        'item_variations_for_item_option_values_query',
        optional(lazy(() => catalogQueryItemVariationsForItemOptionValuesSchema)),
    ],
});
//# sourceMappingURL=catalogQuery.js.map