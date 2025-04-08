import { array, boolean, nullable, object, optional, string, } from '../schema';
export const catalogCustomAttributeValueSchema = object({
    name: ['name', optional(nullable(string()))],
    stringValue: ['string_value', optional(nullable(string()))],
    customAttributeDefinitionId: [
        'custom_attribute_definition_id',
        optional(string()),
    ],
    type: ['type', optional(string())],
    numberValue: ['number_value', optional(nullable(string()))],
    booleanValue: ['boolean_value', optional(nullable(boolean()))],
    selectionUidValues: [
        'selection_uid_values',
        optional(nullable(array(string()))),
    ],
    key: ['key', optional(string())],
});
//# sourceMappingURL=catalogCustomAttributeValue.js.map