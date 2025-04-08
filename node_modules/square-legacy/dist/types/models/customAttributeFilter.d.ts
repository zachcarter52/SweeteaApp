import { Schema } from '../schema';
import { Range } from './range';
/**
 * Supported custom attribute query expressions for calling the
 * [SearchCatalogItems]($e/Catalog/SearchCatalogItems)
 * endpoint to search for items or item variations.
 */
export interface CustomAttributeFilter {
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     * `custom_attribute_definition_id` property value against the the specified id.
     * Exactly one of `custom_attribute_definition_id` or `key` must be specified.
     */
    customAttributeDefinitionId?: string | null;
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     * `key` property value against the specified key.
     * Exactly one of `custom_attribute_definition_id` or `key` must be specified.
     */
    key?: string | null;
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     * `string_value`  property value against the specified text.
     * Exactly one of `string_filter`, `number_filter`, `selection_uids_filter`, or `bool_filter` must be specified.
     */
    stringFilter?: string | null;
    /** The range of a number value between the specified lower and upper bounds. */
    numberFilter?: Range;
    /**
     * A query expression to filter items or item variations by matching  their custom attributes'
     * `selection_uid_values` values against the specified selection uids.
     * Exactly one of `string_filter`, `number_filter`, `selection_uids_filter`, or `bool_filter` must be specified.
     */
    selectionUidsFilter?: string[] | null;
    /**
     * A query expression to filter items or item variations by matching their custom attributes'
     * `boolean_value` property values against the specified Boolean expression.
     * Exactly one of `string_filter`, `number_filter`, `selection_uids_filter`, or `bool_filter` must be specified.
     */
    boolFilter?: boolean | null;
}
export declare const customAttributeFilterSchema: Schema<CustomAttributeFilter>;
