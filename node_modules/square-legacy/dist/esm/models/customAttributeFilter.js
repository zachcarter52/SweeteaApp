import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { rangeSchema } from './range';
export const customAttributeFilterSchema = object({
    customAttributeDefinitionId: [
        'custom_attribute_definition_id',
        optional(nullable(string())),
    ],
    key: ['key', optional(nullable(string()))],
    stringFilter: ['string_filter', optional(nullable(string()))],
    numberFilter: ['number_filter', optional(lazy(() => rangeSchema))],
    selectionUidsFilter: [
        'selection_uids_filter',
        optional(nullable(array(string()))),
    ],
    boolFilter: ['bool_filter', optional(nullable(boolean()))],
});
//# sourceMappingURL=customAttributeFilter.js.map